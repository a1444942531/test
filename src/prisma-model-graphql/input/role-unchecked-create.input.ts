import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRoleUncheckedCreateNestedManyWithoutRoleInput } from './user-role-unchecked-create-nested-many-without-role.input';
import { RolePermissionsUncheckedCreateNestedManyWithoutRoleInput } from './role-permissions-unchecked-create-nested-many-without-role.input';

@InputType()
export class RoleUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => UserRoleUncheckedCreateNestedManyWithoutRoleInput, {nullable:true})
    users?: UserRoleUncheckedCreateNestedManyWithoutRoleInput;

    @Field(() => RolePermissionsUncheckedCreateNestedManyWithoutRoleInput, {nullable:true})
    rolePermissions?: RolePermissionsUncheckedCreateNestedManyWithoutRoleInput;
}
