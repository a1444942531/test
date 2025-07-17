import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RolePermissionsScalarWhereInput } from './role-permissions-scalar-where.input';
import { Type } from 'class-transformer';
import { RolePermissionsUncheckedUpdateManyWithoutPermissionInput } from './role-permissions-unchecked-update-many-without-permission.input';

@InputType()
export class RolePermissionsUpdateManyWithWhereWithoutPermissionInput {

    @Field(() => RolePermissionsScalarWhereInput, {nullable:false})
    @Type(() => RolePermissionsScalarWhereInput)
    where!: RolePermissionsScalarWhereInput;

    @Field(() => RolePermissionsUncheckedUpdateManyWithoutPermissionInput, {nullable:false})
    @Type(() => RolePermissionsUncheckedUpdateManyWithoutPermissionInput)
    data!: RolePermissionsUncheckedUpdateManyWithoutPermissionInput;
}
