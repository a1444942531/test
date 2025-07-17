import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRoleUncheckedCreateNestedManyWithoutUserInput } from './user-role-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => UserRoleUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    userRole?: UserRoleUncheckedCreateNestedManyWithoutUserInput;
}
