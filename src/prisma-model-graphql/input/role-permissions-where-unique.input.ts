import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RolePermissionsRoleIdPermissionIdCompoundUniqueInput } from './role-permissions-role-id-permission-id-compound-unique.input';
import { RolePermissionsWhereInput } from './role-permissions-where.input';
import { StringFilter } from './string-filter.input';
import { RoleScalarRelationFilter } from './role-scalar-relation-filter.input';
import { PermissionScalarRelationFilter } from './permission-scalar-relation-filter.input';

@InputType()
export class RolePermissionsWhereUniqueInput {

    @Field(() => RolePermissionsRoleIdPermissionIdCompoundUniqueInput, {nullable:true})
    roleId_permissionId?: RolePermissionsRoleIdPermissionIdCompoundUniqueInput;

    @Field(() => [RolePermissionsWhereInput], {nullable:true})
    AND?: Array<RolePermissionsWhereInput>;

    @Field(() => [RolePermissionsWhereInput], {nullable:true})
    OR?: Array<RolePermissionsWhereInput>;

    @Field(() => [RolePermissionsWhereInput], {nullable:true})
    NOT?: Array<RolePermissionsWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    roleId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    permissionId?: StringFilter;

    @Field(() => RoleScalarRelationFilter, {nullable:true})
    role?: RoleScalarRelationFilter;

    @Field(() => PermissionScalarRelationFilter, {nullable:true})
    permission?: PermissionScalarRelationFilter;
}
