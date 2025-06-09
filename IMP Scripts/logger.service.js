import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

import morgan from 'morgan';
import winston from 'winston';
// import { Logtail } from '@logtail/node';
// import { LogtailTransport } from '@logtail/winston';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// const logtail = new Logtail('token', {
//     endpoint: 'ing_url',
// });

export class LoggerService {
    static logger;

    constructor() {
        if (!LoggerService.logger) {
            const logDir = path.resolve(__dirname, '../../logs');

            const logLevels = {
                levels: {
                    http: 0,
                    info: 1,
                    warn: 1,
                    error: 1,
                    debug: 2,
                    verbose: 2,
                },
                colors: {
                    http: 'magenta',
                    info: 'green',
                    warn: 'yellow',
                    error: 'red',
                    debug: 'blue',
                    verbose: 'cyan',
                },
            };

            LoggerService.logger = winston.createLogger({
                levels: logLevels.levels,
                level: 'info',
                format: winston.format.combine(
                    winston.format.timestamp(),
                    winston.format.errors({ stack: true }),
                    winston.format.json()
                ),
                transports: [
                    new winston.transports.Console({
                        format: winston.format.combine(
                            winston.format.colorize(),
                            winston.format.printf(({ timestamp, level, message, stack }) => {
                                return `[${timestamp}] ${level}: ${stack || message}`;
                            })
                        ),
                    }),
                    new winston.transports.File({
                        filename: path.join(logDir, 'app.log'),
                        maxsize: 5 * 1024 * 1024,
                    }),
                    // new LogtailTransport(logtail),
                ],
            });

            winston.addColors(logLevels.colors);
        }
    }

    log(message) {
        LoggerService.logger.info(message);
    }

    error(message, error) {
        LoggerService.logger.error(message, { stack: error?.stack });
    }

    warn(message) {
        LoggerService.logger.warn(message);
    }

    debug(message) {
        LoggerService.logger.debug(message);
    }

    verbose(message) {
        LoggerService.logger.verbose(message);
    }

    getHttpLoggerMiddleware() {
        return morgan(':method :url :status :res[content-length] - :response-time ms', {
            stream: {
                write: message => {
                    LoggerService.logger.log('http', message.trim());
                },
            },
        });
    }
}
