import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RolePermissionsWhereUniqueInput } from '../input/role-permissions-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueRolePermissionsArgs {

    @Field(() => RolePermissionsWhereUniqueInput, {nullable:false})
    @Type(() => RolePermissionsWhereUniqueInput)
    where!: Prisma.AtLeast<RolePermissionsWhereUniqueInput, 'roleId_permissionId'>;
}
