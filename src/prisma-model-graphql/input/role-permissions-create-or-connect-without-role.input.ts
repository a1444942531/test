import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RolePermissionsWhereUniqueInput } from './role-permissions-where-unique.input';
import { Type } from 'class-transformer';
import { RolePermissionsCreateWithoutRoleInput } from './role-permissions-create-without-role.input';

@InputType()
export class RolePermissionsCreateOrConnectWithoutRoleInput {

    @Field(() => RolePermissionsWhereUniqueInput, {nullable:false})
    @Type(() => RolePermissionsWhereUniqueInput)
    where!: Prisma.AtLeast<RolePermissionsWhereUniqueInput, 'roleId_permissionId'>;

    @Field(() => RolePermissionsCreateWithoutRoleInput, {nullable:false})
    @Type(() => RolePermissionsCreateWithoutRoleInput)
    create!: RolePermissionsCreateWithoutRoleInput;
}
