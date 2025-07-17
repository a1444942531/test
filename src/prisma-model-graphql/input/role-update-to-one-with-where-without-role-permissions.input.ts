import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleWhereInput } from './role-where.input';
import { Type } from 'class-transformer';
import { RoleUpdateWithoutRolePermissionsInput } from './role-update-without-role-permissions.input';

@InputType()
export class RoleUpdateToOneWithWhereWithoutRolePermissionsInput {

    @Field(() => RoleWhereInput, {nullable:true})
    @Type(() => RoleWhereInput)
    where?: RoleWhereInput;

    @Field(() => RoleUpdateWithoutRolePermissionsInput, {nullable:false})
    @Type(() => RoleUpdateWithoutRolePermissionsInput)
    data!: RoleUpdateWithoutRolePermissionsInput;
}
