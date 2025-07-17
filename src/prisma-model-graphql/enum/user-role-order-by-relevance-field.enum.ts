import { registerEnumType } from '@nestjs/graphql';

export enum UserRoleOrderByRelevanceFieldEnum {
    roleId = "roleId",
    userId = "userId"
}


registerEnumType(UserRoleOrderByRelevanceFieldEnum, { name: 'UserRoleOrderByRelevanceFieldEnum', description: undefined })
