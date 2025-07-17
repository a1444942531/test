import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RolePermissionsWhereUniqueInput } from './role-permissions-where-unique.input';
import { Type } from 'class-transformer';
import { RolePermissionsUpdateWithoutRoleInput } from './role-permissions-update-without-role.input';
import { RolePermissionsCreateWithoutRoleInput } from './role-permissions-create-without-role.input';

@InputType()
export class RolePermissionsUpsertWithWhereUniqueWithoutRoleInput {

    @Field(() => RolePermissionsWhereUniqueInput, {nullable:false})
    @Type(() => RolePermissionsWhereUniqueInput)
    where!: Prisma.AtLeast<RolePermissionsWhereUniqueInput, 'roleId_permissionId'>;

    @Field(() => RolePermissionsUpdateWithoutRoleInput, {nullable:false})
    @Type(() => RolePermissionsUpdateWithoutRoleInput)
    update!: RolePermissionsUpdateWithoutRoleInput;

    @Field(() => RolePermissionsCreateWithoutRoleInput, {nullable:false})
    @Type(() => RolePermissionsCreateWithoutRoleInput)
    create!: RolePermissionsCreateWithoutRoleInput;
}
