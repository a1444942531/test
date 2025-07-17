import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RolePermissionsUpdateInput } from '../input/role-permissions-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { RolePermissionsWhereUniqueInput } from '../input/role-permissions-where-unique.input';

@ArgsType()
export class UpdateOneRolePermissionsArgs {

    @Field(() => RolePermissionsUpdateInput, {nullable:false})
    @Type(() => RolePermissionsUpdateInput)
    data!: RolePermissionsUpdateInput;

    @Field(() => RolePermissionsWhereUniqueInput, {nullable:false})
    @Type(() => RolePermissionsWhereUniqueInput)
    where!: Prisma.AtLeast<RolePermissionsWhereUniqueInput, 'roleId_permissionId'>;
}
