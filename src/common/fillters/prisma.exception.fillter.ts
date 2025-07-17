import { ArgumentsHost, ExceptionFilter, Logger, NotFoundException } from "@nestjs/common";
import { GqlArgumentsHost } from "@nestjs/graphql";
import { Prisma } from "generator/prisma";

function logError() {
    return (target: any, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<any>) => {
        if (descriptor && descriptor.value) {
            const originalMethod = descriptor.value

            descriptor.value = function (exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
                try {
                    const result = originalMethod.apply(this, [exception, host])
                    if (result && typeof result.then === 'function') {
                        return result.then(res => {
                            return res
                        })
                    } else {
                        return result
                    }
                } catch (error) {
                    const gqlHost = GqlArgumentsHost.create(host)
                    const ctx = gqlHost.getContext<any>()

                    this.logger.warn({
                        code: exception.code,
                        message: exception.message,
                        target: exception.meta?.target,
                        path: ctx?.req?.url || gqlHost.getInfo()?.fieldName,
                        variables: ctx?.req?.variables,
                        response: error.response
                    })

                    throw error
                }
            }
        }
    }
}

// 全局异常过滤器
export class PrismaExceptionFilter implements ExceptionFilter {
    private readonly logger = new Logger(PrismaExceptionFilter.name);

    @logError()
    catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
        if (exception.code === 'P2025') {
            throw new NotFoundException("资源不存在1")
        }

        throw exception
    }
}