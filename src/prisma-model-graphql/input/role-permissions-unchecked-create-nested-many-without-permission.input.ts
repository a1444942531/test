import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RolePermissionsCreateWithoutPermissionInput } from './role-permissions-create-without-permission.input';
import { Type } from 'class-transformer';
import { RolePermissionsCreateOrConnectWithoutPermissionInput } from './role-permissions-create-or-connect-without-permission.input';
import { RolePermissionsCreateManyPermissionInputEnvelope } from './role-permissions-create-many-permission-input-envelope.input';
import { Prisma } from '@prisma/client';
import { RolePermissionsWhereUniqueInput } from './role-permissions-where-unique.input';

@InputType()
export class RolePermissionsUncheckedCreateNestedManyWithoutPermissionInput {

    @Field(() => [RolePermissionsCreateWithoutPermissionInput], {nullable:true})
    @Type(() => RolePermissionsCreateWithoutPermissionInput)
    create?: Array<RolePermissionsCreateWithoutPermissionInput>;

    @Field(() => [RolePermissionsCreateOrConnectWithoutPermissionInput], {nullable:true})
    @Type(() => RolePermissionsCreateOrConnectWithoutPermissionInput)
    connectOrCreate?: Array<RolePermissionsCreateOrConnectWithoutPermissionInput>;

    @Field(() => RolePermissionsCreateManyPermissionInputEnvelope, {nullable:true})
    @Type(() => RolePermissionsCreateManyPermissionInputEnvelope)
    createMany?: RolePermissionsCreateManyPermissionInputEnvelope;

    @Field(() => [RolePermissionsWhereUniqueInput], {nullable:true})
    @Type(() => RolePermissionsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RolePermissionsWhereUniqueInput, 'roleId_permissionId'>>;
}
