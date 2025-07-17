import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRoleUncheckedCreateNestedManyWithoutRoleInput } from './user-role-unchecked-create-nested-many-without-role.input';

@InputType()
export class RoleUncheckedCreateWithoutRolePermissionsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => UserRoleUncheckedCreateNestedManyWithoutRoleInput, {nullable:true})
    users?: UserRoleUncheckedCreateNestedManyWithoutRoleInput;
}
