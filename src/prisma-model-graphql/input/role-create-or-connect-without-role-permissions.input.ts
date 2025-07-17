import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RoleWhereUniqueInput } from './role-where-unique.input';
import { Type } from 'class-transformer';
import { RoleCreateWithoutRolePermissionsInput } from './role-create-without-role-permissions.input';

@InputType()
export class RoleCreateOrConnectWithoutRolePermissionsInput {

    @Field(() => RoleWhereUniqueInput, {nullable:false})
    @Type(() => RoleWhereUniqueInput)
    where!: Prisma.AtLeast<RoleWhereUniqueInput, 'id' | 'name'>;

    @Field(() => RoleCreateWithoutRolePermissionsInput, {nullable:false})
    @Type(() => RoleCreateWithoutRolePermissionsInput)
    create!: RoleCreateWithoutRolePermissionsInput;
}
