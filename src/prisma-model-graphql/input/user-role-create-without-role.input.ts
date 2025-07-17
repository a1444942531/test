import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutUserRoleInput } from './user-create-nested-one-without-user-role.input';

@InputType()
export class UserRoleCreateWithoutRoleInput {

    @Field(() => UserCreateNestedOneWithoutUserRoleInput, {nullable:false})
    user!: UserCreateNestedOneWithoutUserRoleInput;
}
