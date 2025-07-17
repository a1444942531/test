import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RolePermissionsScalarWhereInput } from './role-permissions-scalar-where.input';
import { Type } from 'class-transformer';
import { RolePermissionsUncheckedUpdateManyWithoutRoleInput } from './role-permissions-unchecked-update-many-without-role.input';

@InputType()
export class RolePermissionsUpdateManyWithWhereWithoutRoleInput {

    @Field(() => RolePermissionsScalarWhereInput, {nullable:false})
    @Type(() => RolePermissionsScalarWhereInput)
    where!: RolePermissionsScalarWhereInput;

    @Field(() => RolePermissionsUncheckedUpdateManyWithoutRoleInput, {nullable:false})
    @Type(() => RolePermissionsUncheckedUpdateManyWithoutRoleInput)
    data!: RolePermissionsUncheckedUpdateManyWithoutRoleInput;
}
