import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleWhereInput } from './role-where.input';
import { StringNullableFilter } from './string-nullable-filter.input';
import { UserRoleListRelationFilter } from './user-role-list-relation-filter.input';
import { RolePermissionsListRelationFilter } from './role-permissions-list-relation-filter.input';

@InputType()
export class RoleWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => [RoleWhereInput], {nullable:true})
    AND?: Array<RoleWhereInput>;

    @Field(() => [RoleWhereInput], {nullable:true})
    OR?: Array<RoleWhereInput>;

    @Field(() => [RoleWhereInput], {nullable:true})
    NOT?: Array<RoleWhereInput>;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => UserRoleListRelationFilter, {nullable:true})
    users?: UserRoleListRelationFilter;

    @Field(() => RolePermissionsListRelationFilter, {nullable:true})
    rolePermissions?: RolePermissionsListRelationFilter;
}
