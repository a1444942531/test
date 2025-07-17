import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleUpdateOneRequiredWithoutRolePermissionsNestedInput } from './role-update-one-required-without-role-permissions-nested.input';
import { PermissionUpdateOneRequiredWithoutRolePermissionsNestedInput } from './permission-update-one-required-without-role-permissions-nested.input';

@InputType()
export class RolePermissionsUpdateInput {

    @Field(() => RoleUpdateOneRequiredWithoutRolePermissionsNestedInput, {nullable:true})
    role?: RoleUpdateOneRequiredWithoutRolePermissionsNestedInput;

    @Field(() => PermissionUpdateOneRequiredWithoutRolePermissionsNestedInput, {nullable:true})
    permission?: PermissionUpdateOneRequiredWithoutRolePermissionsNestedInput;
}
