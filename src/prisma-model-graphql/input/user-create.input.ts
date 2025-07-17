import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRoleCreateNestedManyWithoutUserInput } from './user-role-create-nested-many-without-user.input';

@InputType()
export class UserCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => UserRoleCreateNestedManyWithoutUserInput, {nullable:true})
    userRole?: UserRoleCreateNestedManyWithoutUserInput;
}
