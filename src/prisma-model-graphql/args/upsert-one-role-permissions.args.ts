import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RolePermissionsWhereUniqueInput } from '../input/role-permissions-where-unique.input';
import { Type } from 'class-transformer';
import { RolePermissionsCreateInput } from '../input/role-permissions-create.input';
import { RolePermissionsUpdateInput } from '../input/role-permissions-update.input';

@ArgsType()
export class UpsertOneRolePermissionsArgs {

    @Field(() => RolePermissionsWhereUniqueInput, {nullable:false})
    @Type(() => RolePermissionsWhereUniqueInput)
    where!: Prisma.AtLeast<RolePermissionsWhereUniqueInput, 'roleId_permissionId'>;

    @Field(() => RolePermissionsCreateInput, {nullable:false})
    @Type(() => RolePermissionsCreateInput)
    create!: RolePermissionsCreateInput;

    @Field(() => RolePermissionsUpdateInput, {nullable:false})
    @Type(() => RolePermissionsUpdateInput)
    update!: RolePermissionsUpdateInput;
}
