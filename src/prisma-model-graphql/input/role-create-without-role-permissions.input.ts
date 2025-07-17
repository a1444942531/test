import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRoleCreateNestedManyWithoutRoleInput } from './user-role-create-nested-many-without-role.input';

@InputType()
export class RoleCreateWithoutRolePermissionsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => UserRoleCreateNestedManyWithoutRoleInput, {nullable:true})
    users?: UserRoleCreateNestedManyWithoutRoleInput;
}
