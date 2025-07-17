import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from './string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from './nullable-string-field-update-operations.input';
import { RolePermissionsUpdateManyWithoutRoleNestedInput } from './role-permissions-update-many-without-role-nested.input';

@InputType()
export class RoleUpdateWithoutUsersInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => RolePermissionsUpdateManyWithoutRoleNestedInput, {nullable:true})
    rolePermissions?: RolePermissionsUpdateManyWithoutRoleNestedInput;
}
