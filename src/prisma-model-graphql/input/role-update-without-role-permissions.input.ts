import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from './string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from './nullable-string-field-update-operations.input';
import { UserRoleUpdateManyWithoutRoleNestedInput } from './user-role-update-many-without-role-nested.input';

@InputType()
export class RoleUpdateWithoutRolePermissionsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => UserRoleUpdateManyWithoutRoleNestedInput, {nullable:true})
    users?: UserRoleUpdateManyWithoutRoleNestedInput;
}
