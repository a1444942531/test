import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleCreateNestedOneWithoutRolePermissionsInput } from './role-create-nested-one-without-role-permissions.input';
import { PermissionCreateNestedOneWithoutRolePermissionsInput } from './permission-create-nested-one-without-role-permissions.input';

@InputType()
export class RolePermissionsCreateInput {

    @Field(() => RoleCreateNestedOneWithoutRolePermissionsInput, {nullable:false})
    role!: RoleCreateNestedOneWithoutRolePermissionsInput;

    @Field(() => PermissionCreateNestedOneWithoutRolePermissionsInput, {nullable:false})
    permission!: PermissionCreateNestedOneWithoutRolePermissionsInput;
}
