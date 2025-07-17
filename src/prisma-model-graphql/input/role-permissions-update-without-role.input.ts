import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionUpdateOneRequiredWithoutRolePermissionsNestedInput } from './permission-update-one-required-without-role-permissions-nested.input';

@InputType()
export class RolePermissionsUpdateWithoutRoleInput {

    @Field(() => PermissionUpdateOneRequiredWithoutRolePermissionsNestedInput, {nullable:true})
    permission?: PermissionUpdateOneRequiredWithoutRolePermissionsNestedInput;
}
