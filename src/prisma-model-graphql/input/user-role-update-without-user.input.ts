import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleUpdateOneRequiredWithoutUsersNestedInput } from './role-update-one-required-without-users-nested.input';

@InputType()
export class UserRoleUpdateWithoutUserInput {

    @Field(() => RoleUpdateOneRequiredWithoutUsersNestedInput, {nullable:true})
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput;
}
