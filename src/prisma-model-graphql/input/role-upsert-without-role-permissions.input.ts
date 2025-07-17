import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleUpdateWithoutRolePermissionsInput } from './role-update-without-role-permissions.input';
import { Type } from 'class-transformer';
import { RoleCreateWithoutRolePermissionsInput } from './role-create-without-role-permissions.input';
import { RoleWhereInput } from './role-where.input';

@InputType()
export class RoleUpsertWithoutRolePermissionsInput {

    @Field(() => RoleUpdateWithoutRolePermissionsInput, {nullable:false})
    @Type(() => RoleUpdateWithoutRolePermissionsInput)
    update!: RoleUpdateWithoutRolePermissionsInput;

    @Field(() => RoleCreateWithoutRolePermissionsInput, {nullable:false})
    @Type(() => RoleCreateWithoutRolePermissionsInput)
    create!: RoleCreateWithoutRolePermissionsInput;

    @Field(() => RoleWhereInput, {nullable:true})
    @Type(() => RoleWhereInput)
    where?: RoleWhereInput;
}
