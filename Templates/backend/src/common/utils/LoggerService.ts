import winston from 'winston';
import morgan from 'morgan';
import path from 'path';

export class LoggerService {
    private static logger: winston.Logger;

    constructor() {
        if (!LoggerService.logger) {
            const logDir = path.resolve(__dirname, '../../../logs');

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
                    winston.format.json(),
                ),
                transports: [
                    new winston.transports.Console({
                        format: winston.format.combine(
                            winston.format.colorize(),
                            winston.format.printf(
                                ({ timestamp, level, message, stack }) => {
                                    return `[${timestamp}] ${level}: ${stack || message}`;
                                },
                            ),
                        ),
                    }),
                    new winston.transports.File({
                        filename: path.join(logDir, 'app.log'),
                        maxsize: 5 * 1024 * 1024,
                        maxFiles: 5,
                    }),
                ],
            });

            winston.addColors(logLevels.colors);
        }
    }

    log(message: string): void {
        LoggerService.logger.info(message);
    }

    error(message: string, error?: Error): void {
        LoggerService.logger.error(message, { stack: error?.stack });
    }

    warn(message: string): void {
        LoggerService.logger.warn(message);
    }

    debug(message: string): void {
        LoggerService.logger.debug(message);
    }

    verbose(message: string): void {
        LoggerService.logger.verbose(message);
    }

    getHttpLoggerMiddleware() {
        return morgan(
            ':method :url :status :res[content-length] - :response-time ms',
            {
                stream: {
                    write: (message: string) => {
                        LoggerService.logger.log('http', message.trim());
                    },
                },
            },
        );
    }
}
