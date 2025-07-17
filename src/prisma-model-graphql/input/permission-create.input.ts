import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RolePermissionsCreateNestedManyWithoutPermissionInput } from './role-permissions-create-nested-many-without-permission.input';

@InputType()
export class PermissionCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    action!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => RolePermissionsCreateNestedManyWithoutPermissionInput, {nullable:true})
    rolePermissions?: RolePermissionsCreateNestedManyWithoutPermissionInput;
}
