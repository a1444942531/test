import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RolePermissionsUncheckedCreateNestedManyWithoutPermissionInput } from './role-permissions-unchecked-create-nested-many-without-permission.input';

@InputType()
export class PermissionUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    action!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => RolePermissionsUncheckedCreateNestedManyWithoutPermissionInput, {nullable:true})
    rolePermissions?: RolePermissionsUncheckedCreateNestedManyWithoutPermissionInput;
}
