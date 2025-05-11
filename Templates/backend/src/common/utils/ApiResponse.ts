//eslint-disable-next-line @typescript-eslint/no-explicit-any
class ApiResponse<T = any> {
    success: boolean;
    statusCode: number;
    message: string;
    data: T | null;

    constructor(
        statusCode: number,
        message = 'Success',
        data: T | null = null,
    ) {
        this.success = true;
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
    }
}

export { ApiResponse };
