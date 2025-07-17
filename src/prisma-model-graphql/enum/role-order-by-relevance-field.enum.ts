import { registerEnumType } from '@nestjs/graphql';

export enum RoleOrderByRelevanceFieldEnum {
    id = "id",
    name = "name",
    description = "description"
}


registerEnumType(RoleOrderByRelevanceFieldEnum, { name: 'RoleOrderByRelevanceFieldEnum', description: undefined })
