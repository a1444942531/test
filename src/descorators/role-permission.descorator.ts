import { SetMetadata } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Action } from "src/common/enum/actions.enum";

const accumulateMetadata = (key: string, permission: string) => {
    return (
        target: any,
        propertyKey?: string | symbol,
        descriptor?: TypedPropertyDescriptor<any>
    ) => {
        // 用户获取已有的matedate
        const reflector = new Reflector()

        // 针对于方法 function 的装饰器
        if(descriptor && descriptor.value) {
            const existingPermissions = reflector.get(key, descriptor.value) || []
            const newPermissions = [...existingPermissions, permission] 
            SetMetadata(key, newPermissions)(target, propertyKey!, descriptor)
        } else {
            // 针对于类 constructor
            const existingPermissions = reflector.get(key, target) || []
            const newPermissions = [...existingPermissions, permission]
            SetMetadata(key, newPermissions)(target)
        }
    }
}

export const PERMISSION_KEY = 'permission';

export const Permission = (permission: string) => accumulateMetadata(PERMISSION_KEY, permission)

export const Create = () => accumulateMetadata(PERMISSION_KEY, Action.Create.toLocaleLowerCase())

export const Update = () => accumulateMetadata(PERMISSION_KEY, Action.Update.toLocaleLowerCase())

export const Read = () => accumulateMetadata(PERMISSION_KEY, Action.Read.toLocaleLowerCase())

export const Delete = () => accumulateMetadata(PERMISSION_KEY, Action.Delete.toLocaleLowerCase())



