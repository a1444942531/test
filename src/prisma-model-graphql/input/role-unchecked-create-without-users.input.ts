import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RolePermissionsUncheckedCreateNestedManyWithoutRoleInput } from './role-permissions-unchecked-create-nested-many-without-role.input';

@InputType()
export class RoleUncheckedCreateWithoutUsersInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => RolePermissionsUncheckedCreateNestedManyWithoutRoleInput, {nullable:true})
    rolePermissions?: RolePermissionsUncheckedCreateNestedManyWithoutRoleInput;
}
