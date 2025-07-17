import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutUserRoleNestedInput } from './user-update-one-required-without-user-role-nested.input';

@InputType()
export class UserRoleUpdateWithoutRoleInput {

    @Field(() => UserUpdateOneRequiredWithoutUserRoleNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutUserRoleNestedInput;
}
