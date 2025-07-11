import { InternalServerErrorException } from "@nestjs/common"
import { plainToInstance } from "class-transformer"
import { validateOrReject, ValidationError } from "class-validator"

/**
 * 方法参数校验装饰器，仅支持验证第一个参数
 * @example
 *   @ValidateArgs(UserDto)
 *   async create(data: UserDto) { ... }
 * @param dtoClass DTO验证类
 * @returns 
 */
export function ValidateArgs(dtoClass: any) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const original = descriptor.value
        descriptor.value = async function (...args: any[]) {
            const param = args[0]

            if (typeof param != 'object') {
                throw new InternalServerErrorException("非法传参 0000")
            }

            const dto = plainToInstance(dtoClass, args[0])

            try {
                await validateOrReject(dto)
            } catch (errors) {
                if (Array.isArray(errors)) {
                    const message = errors.map((err: ValidationError) => Object.values(err.constraints || {}).join(', ')).join("; ")
                    throw new InternalServerErrorException(`${message}`)
                }

                throw errors
            }

            return original.apply(this, args)
        }
    }
}
