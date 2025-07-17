import { registerEnumType } from '@nestjs/graphql';

export enum RolePermissionsOrderByRelevanceFieldEnum {
    roleId = "roleId",
    permissionId = "permissionId"
}


registerEnumType(RolePermissionsOrderByRelevanceFieldEnum, { name: 'RolePermissionsOrderByRelevanceFieldEnum', description: undefined })
