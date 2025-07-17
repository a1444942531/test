import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RolePermissionsWhereUniqueInput } from './role-permissions-where-unique.input';
import { Type } from 'class-transformer';
import { RolePermissionsUpdateWithoutPermissionInput } from './role-permissions-update-without-permission.input';

@InputType()
export class RolePermissionsUpdateWithWhereUniqueWithoutPermissionInput {

    @Field(() => RolePermissionsWhereUniqueInput, {nullable:false})
    @Type(() => RolePermissionsWhereUniqueInput)
    where!: Prisma.AtLeast<RolePermissionsWhereUniqueInput, 'roleId_permissionId'>;

    @Field(() => RolePermissionsUpdateWithoutPermissionInput, {nullable:false})
    @Type(() => RolePermissionsUpdateWithoutPermissionInput)
    data!: RolePermissionsUpdateWithoutPermissionInput;
}
