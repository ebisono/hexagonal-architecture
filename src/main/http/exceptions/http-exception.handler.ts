import { ArgumentsHost, ExceptionFilter, HttpException } from "@nestjs/common";
import { Response } from "express";
import { ErrorType } from "src/core/commons/enums";

export class HttpExceptionHandler implements ExceptionFilter {

    catch( exception: HttpException, host: ArgumentsHost ): any {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const status = +exception.getStatus();

        const { errorType, payload, message } = exception.getResponse() as {
            errorType: ErrorType;
            payload: any;
            message: any;
        };

        response.status(status).json({
            statusCode: status,
            errorType: errorType,
            message: message,
            payload: payload,
            timestamp: new Date().getTime(),
        });
    }
}
  