import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from './string-field-update-operations.input';

@InputType()
export class RolePermissionsUncheckedUpdateManyWithoutRoleInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    permissionId?: StringFieldUpdateOperationsInput;
}
