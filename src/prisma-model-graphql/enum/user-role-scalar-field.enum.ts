import { registerEnumType } from '@nestjs/graphql';

export enum UserRoleScalarFieldEnum {
    roleId = "roleId",
    userId = "userId"
}


registerEnumType(UserRoleScalarFieldEnum, { name: 'UserRoleScalarFieldEnum', description: undefined })
