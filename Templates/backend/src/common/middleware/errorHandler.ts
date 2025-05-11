import { Request, Response } from 'express';
import { ApiError } from '../utils/ApiError';
import { HttpStatus } from '../constants/HttpStatus';

export function errorHandler(
    err: Error | ApiError,
    req: Request,
    res: Response,
): void {
    const status =
        err instanceof ApiError ? err.status : HttpStatus.INTERNAL_SERVER_ERROR;
    const message = err.message || 'Internal Server Error';
    const data = err instanceof ApiError ? err.data : null;

    res.status(status).json({
        success: false,
        statusCode: status,
        message,
        ...(data && { data }),
    });
}
