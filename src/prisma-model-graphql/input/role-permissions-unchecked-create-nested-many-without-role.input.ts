import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RolePermissionsCreateWithoutRoleInput } from './role-permissions-create-without-role.input';
import { Type } from 'class-transformer';
import { RolePermissionsCreateOrConnectWithoutRoleInput } from './role-permissions-create-or-connect-without-role.input';
import { RolePermissionsCreateManyRoleInputEnvelope } from './role-permissions-create-many-role-input-envelope.input';
import { Prisma } from '@prisma/client';
import { RolePermissionsWhereUniqueInput } from './role-permissions-where-unique.input';

@InputType()
export class RolePermissionsUncheckedCreateNestedManyWithoutRoleInput {

    @Field(() => [RolePermissionsCreateWithoutRoleInput], {nullable:true})
    @Type(() => RolePermissionsCreateWithoutRoleInput)
    create?: Array<RolePermissionsCreateWithoutRoleInput>;

    @Field(() => [RolePermissionsCreateOrConnectWithoutRoleInput], {nullable:true})
    @Type(() => RolePermissionsCreateOrConnectWithoutRoleInput)
    connectOrCreate?: Array<RolePermissionsCreateOrConnectWithoutRoleInput>;

    @Field(() => RolePermissionsCreateManyRoleInputEnvelope, {nullable:true})
    @Type(() => RolePermissionsCreateManyRoleInputEnvelope)
    createMany?: RolePermissionsCreateManyRoleInputEnvelope;

    @Field(() => [RolePermissionsWhereUniqueInput], {nullable:true})
    @Type(() => RolePermissionsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RolePermissionsWhereUniqueInput, 'roleId_permissionId'>>;
}
