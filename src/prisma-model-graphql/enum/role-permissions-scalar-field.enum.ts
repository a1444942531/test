import { registerEnumType } from '@nestjs/graphql';

export enum RolePermissionsScalarFieldEnum {
    roleId = "roleId",
    permissionId = "permissionId"
}


registerEnumType(RolePermissionsScalarFieldEnum, { name: 'RolePermissionsScalarFieldEnum', description: undefined })
