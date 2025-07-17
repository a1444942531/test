import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from './string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from './nullable-string-field-update-operations.input';
import { UserRoleUncheckedUpdateManyWithoutRoleNestedInput } from './user-role-unchecked-update-many-without-role-nested.input';
import { RolePermissionsUncheckedUpdateManyWithoutRoleNestedInput } from './role-permissions-unchecked-update-many-without-role-nested.input';

@InputType()
export class RoleUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => UserRoleUncheckedUpdateManyWithoutRoleNestedInput, {nullable:true})
    users?: UserRoleUncheckedUpdateManyWithoutRoleNestedInput;

    @Field(() => RolePermissionsUncheckedUpdateManyWithoutRoleNestedInput, {nullable:true})
    rolePermissions?: RolePermissionsUncheckedUpdateManyWithoutRoleNestedInput;
}
