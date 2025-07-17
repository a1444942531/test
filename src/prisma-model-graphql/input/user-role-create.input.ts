import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleCreateNestedOneWithoutUsersInput } from './role-create-nested-one-without-users.input';
import { UserCreateNestedOneWithoutUserRoleInput } from './user-create-nested-one-without-user-role.input';

@InputType()
export class UserRoleCreateInput {

    @Field(() => RoleCreateNestedOneWithoutUsersInput, {nullable:false})
    role!: RoleCreateNestedOneWithoutUsersInput;

    @Field(() => UserCreateNestedOneWithoutUserRoleInput, {nullable:false})
    user!: UserCreateNestedOneWithoutUserRoleInput;
}
