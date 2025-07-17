import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionWhereInput } from './permission-where.input';
import { Type } from 'class-transformer';
import { PermissionUpdateWithoutRolePermissionsInput } from './permission-update-without-role-permissions.input';

@InputType()
export class PermissionUpdateToOneWithWhereWithoutRolePermissionsInput {

    @Field(() => PermissionWhereInput, {nullable:true})
    @Type(() => PermissionWhereInput)
    where?: PermissionWhereInput;

    @Field(() => PermissionUpdateWithoutRolePermissionsInput, {nullable:false})
    @Type(() => PermissionUpdateWithoutRolePermissionsInput)
    data!: PermissionUpdateWithoutRolePermissionsInput;
}
