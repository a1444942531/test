import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from './string-filter.input';
import { StringNullableFilter } from './string-nullable-filter.input';
import { UserRoleListRelationFilter } from './user-role-list-relation-filter.input';
import { RolePermissionsListRelationFilter } from './role-permissions-list-relation-filter.input';

@InputType()
export class RoleWhereInput {

    @Field(() => [RoleWhereInput], {nullable:true})
    AND?: Array<RoleWhereInput>;

    @Field(() => [RoleWhereInput], {nullable:true})
    OR?: Array<RoleWhereInput>;

    @Field(() => [RoleWhereInput], {nullable:true})
    NOT?: Array<RoleWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => UserRoleListRelationFilter, {nullable:true})
    users?: UserRoleListRelationFilter;

    @Field(() => RolePermissionsListRelationFilter, {nullable:true})
    rolePermissions?: RolePermissionsListRelationFilter;
}
