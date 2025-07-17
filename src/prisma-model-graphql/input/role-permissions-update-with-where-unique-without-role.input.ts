import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RolePermissionsWhereUniqueInput } from './role-permissions-where-unique.input';
import { Type } from 'class-transformer';
import { RolePermissionsUpdateWithoutRoleInput } from './role-permissions-update-without-role.input';

@InputType()
export class RolePermissionsUpdateWithWhereUniqueWithoutRoleInput {

    @Field(() => RolePermissionsWhereUniqueInput, {nullable:false})
    @Type(() => RolePermissionsWhereUniqueInput)
    where!: Prisma.AtLeast<RolePermissionsWhereUniqueInput, 'roleId_permissionId'>;

    @Field(() => RolePermissionsUpdateWithoutRoleInput, {nullable:false})
    @Type(() => RolePermissionsUpdateWithoutRoleInput)
    data!: RolePermissionsUpdateWithoutRoleInput;
}
