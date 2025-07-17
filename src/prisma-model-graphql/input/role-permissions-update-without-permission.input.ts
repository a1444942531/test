import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleUpdateOneRequiredWithoutRolePermissionsNestedInput } from './role-update-one-required-without-role-permissions-nested.input';

@InputType()
export class RolePermissionsUpdateWithoutPermissionInput {

    @Field(() => RoleUpdateOneRequiredWithoutRolePermissionsNestedInput, {nullable:true})
    role?: RoleUpdateOneRequiredWithoutRolePermissionsNestedInput;
}
