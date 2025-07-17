import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleCreateNestedOneWithoutRolePermissionsInput } from './role-create-nested-one-without-role-permissions.input';

@InputType()
export class RolePermissionsCreateWithoutPermissionInput {

    @Field(() => RoleCreateNestedOneWithoutRolePermissionsInput, {nullable:false})
    role!: RoleCreateNestedOneWithoutRolePermissionsInput;
}
