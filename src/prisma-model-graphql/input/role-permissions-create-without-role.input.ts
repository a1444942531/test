import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionCreateNestedOneWithoutRolePermissionsInput } from './permission-create-nested-one-without-role-permissions.input';

@InputType()
export class RolePermissionsCreateWithoutRoleInput {

    @Field(() => PermissionCreateNestedOneWithoutRolePermissionsInput, {nullable:false})
    permission!: PermissionCreateNestedOneWithoutRolePermissionsInput;
}
