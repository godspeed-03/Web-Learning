export class ApiError extends Error {
    public status: number;
    public message: string;
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    public data?: any;
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(message: string, status = 500, data?: any) {
        super(message);

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, ApiError);
        }

        this.status = status;
        this.message = message;
        this.data = data;

        this.name = this.constructor.name;

        Object.setPrototypeOf(this, ApiError.prototype);
    }
}
