import { ArgumentsHost, ExceptionFilter, HttpException, Logger } from "@nestjs/common";
import { Request, Response } from "express";

// 全局异常过滤器
export class HttpExceptionFilter implements ExceptionFilter {
    private readonly logger = new Logger(HttpExceptionFilter.name);

    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const res = ctx.getResponse<Response>();
        const req = ctx.getRequest<Request>();
        const status = exception.getStatus();

        res.json({
            message: "123"
        })
    }
}