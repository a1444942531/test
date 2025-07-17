import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from './string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from './nullable-string-field-update-operations.input';
import { RolePermissionsUncheckedUpdateManyWithoutPermissionNestedInput } from './role-permissions-unchecked-update-many-without-permission-nested.input';

@InputType()
export class PermissionUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    action?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => RolePermissionsUncheckedUpdateManyWithoutPermissionNestedInput, {nullable:true})
    rolePermissions?: RolePermissionsUncheckedUpdateManyWithoutPermissionNestedInput;
}
