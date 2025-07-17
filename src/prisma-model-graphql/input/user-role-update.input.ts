import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleUpdateOneRequiredWithoutUsersNestedInput } from './role-update-one-required-without-users-nested.input';
import { UserUpdateOneRequiredWithoutUserRoleNestedInput } from './user-update-one-required-without-user-role-nested.input';

@InputType()
export class UserRoleUpdateInput {

    @Field(() => RoleUpdateOneRequiredWithoutUsersNestedInput, {nullable:true})
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutUserRoleNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutUserRoleNestedInput;
}
