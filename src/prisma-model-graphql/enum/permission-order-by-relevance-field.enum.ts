import { registerEnumType } from '@nestjs/graphql';

export enum PermissionOrderByRelevanceFieldEnum {
    id = "id",
    name = "name",
    action = "action",
    description = "description"
}


registerEnumType(PermissionOrderByRelevanceFieldEnum, { name: 'PermissionOrderByRelevanceFieldEnum', description: undefined })
