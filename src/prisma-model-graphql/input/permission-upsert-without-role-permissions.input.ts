import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionUpdateWithoutRolePermissionsInput } from './permission-update-without-role-permissions.input';
import { Type } from 'class-transformer';
import { PermissionCreateWithoutRolePermissionsInput } from './permission-create-without-role-permissions.input';
import { PermissionWhereInput } from './permission-where.input';

@InputType()
export class PermissionUpsertWithoutRolePermissionsInput {

    @Field(() => PermissionUpdateWithoutRolePermissionsInput, {nullable:false})
    @Type(() => PermissionUpdateWithoutRolePermissionsInput)
    update!: PermissionUpdateWithoutRolePermissionsInput;

    @Field(() => PermissionCreateWithoutRolePermissionsInput, {nullable:false})
    @Type(() => PermissionCreateWithoutRolePermissionsInput)
    create!: PermissionCreateWithoutRolePermissionsInput;

    @Field(() => PermissionWhereInput, {nullable:true})
    @Type(() => PermissionWhereInput)
    where?: PermissionWhereInput;
}
