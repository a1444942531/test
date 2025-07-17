import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RolePermissionsWhereUniqueInput } from './role-permissions-where-unique.input';
import { Type } from 'class-transformer';
import { RolePermissionsCreateWithoutPermissionInput } from './role-permissions-create-without-permission.input';

@InputType()
export class RolePermissionsCreateOrConnectWithoutPermissionInput {

    @Field(() => RolePermissionsWhereUniqueInput, {nullable:false})
    @Type(() => RolePermissionsWhereUniqueInput)
    where!: Prisma.AtLeast<RolePermissionsWhereUniqueInput, 'roleId_permissionId'>;

    @Field(() => RolePermissionsCreateWithoutPermissionInput, {nullable:false})
    @Type(() => RolePermissionsCreateWithoutPermissionInput)
    create!: RolePermissionsCreateWithoutPermissionInput;
}
