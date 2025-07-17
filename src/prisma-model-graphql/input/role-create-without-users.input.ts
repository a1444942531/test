import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RolePermissionsCreateNestedManyWithoutRoleInput } from './role-permissions-create-nested-many-without-role.input';

@InputType()
export class RoleCreateWithoutUsersInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => RolePermissionsCreateNestedManyWithoutRoleInput, {nullable:true})
    rolePermissions?: RolePermissionsCreateNestedManyWithoutRoleInput;
}
