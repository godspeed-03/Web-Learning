import { LoggerService } from './src/common/utils/LoggerService';
import { errorHandler } from './src/common/middleware/errorHandler';
import express from 'express';

const PORT = process.env.PORT || 3700;
const logger = new LoggerService();

const app = express();

app.use(logger.getHttpLoggerMiddleware());

app.use(errorHandler);

app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Server started on port ${PORT} by worker PID: ${process.pid}`);
});
