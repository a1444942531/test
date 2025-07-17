import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RolePermissionsCreateWithoutPermissionInput } from './role-permissions-create-without-permission.input';
import { Type } from 'class-transformer';
import { RolePermissionsCreateOrConnectWithoutPermissionInput } from './role-permissions-create-or-connect-without-permission.input';
import { RolePermissionsUpsertWithWhereUniqueWithoutPermissionInput } from './role-permissions-upsert-with-where-unique-without-permission.input';
import { RolePermissionsCreateManyPermissionInputEnvelope } from './role-permissions-create-many-permission-input-envelope.input';
import { Prisma } from '@prisma/client';
import { RolePermissionsWhereUniqueInput } from './role-permissions-where-unique.input';
import { RolePermissionsUpdateWithWhereUniqueWithoutPermissionInput } from './role-permissions-update-with-where-unique-without-permission.input';
import { RolePermissionsUpdateManyWithWhereWithoutPermissionInput } from './role-permissions-update-many-with-where-without-permission.input';
import { RolePermissionsScalarWhereInput } from './role-permissions-scalar-where.input';

@InputType()
export class RolePermissionsUpdateManyWithoutPermissionNestedInput {

    @Field(() => [RolePermissionsCreateWithoutPermissionInput], {nullable:true})
    @Type(() => RolePermissionsCreateWithoutPermissionInput)
    create?: Array<RolePermissionsCreateWithoutPermissionInput>;

    @Field(() => [RolePermissionsCreateOrConnectWithoutPermissionInput], {nullable:true})
    @Type(() => RolePermissionsCreateOrConnectWithoutPermissionInput)
    connectOrCreate?: Array<RolePermissionsCreateOrConnectWithoutPermissionInput>;

    @Field(() => [RolePermissionsUpsertWithWhereUniqueWithoutPermissionInput], {nullable:true})
    @Type(() => RolePermissionsUpsertWithWhereUniqueWithoutPermissionInput)
    upsert?: Array<RolePermissionsUpsertWithWhereUniqueWithoutPermissionInput>;

    @Field(() => RolePermissionsCreateManyPermissionInputEnvelope, {nullable:true})
    @Type(() => RolePermissionsCreateManyPermissionInputEnvelope)
    createMany?: RolePermissionsCreateManyPermissionInputEnvelope;

    @Field(() => [RolePermissionsWhereUniqueInput], {nullable:true})
    @Type(() => RolePermissionsWhereUniqueInput)
    set?: Array<Prisma.AtLeast<RolePermissionsWhereUniqueInput, 'roleId_permissionId'>>;

    @Field(() => [RolePermissionsWhereUniqueInput], {nullable:true})
    @Type(() => RolePermissionsWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<RolePermissionsWhereUniqueInput, 'roleId_permissionId'>>;

    @Field(() => [RolePermissionsWhereUniqueInput], {nullable:true})
    @Type(() => RolePermissionsWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<RolePermissionsWhereUniqueInput, 'roleId_permissionId'>>;

    @Field(() => [RolePermissionsWhereUniqueInput], {nullable:true})
    @Type(() => RolePermissionsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RolePermissionsWhereUniqueInput, 'roleId_permissionId'>>;

    @Field(() => [RolePermissionsUpdateWithWhereUniqueWithoutPermissionInput], {nullable:true})
    @Type(() => RolePermissionsUpdateWithWhereUniqueWithoutPermissionInput)
    update?: Array<RolePermissionsUpdateWithWhereUniqueWithoutPermissionInput>;

    @Field(() => [RolePermissionsUpdateManyWithWhereWithoutPermissionInput], {nullable:true})
    @Type(() => RolePermissionsUpdateManyWithWhereWithoutPermissionInput)
    updateMany?: Array<RolePermissionsUpdateManyWithWhereWithoutPermissionInput>;

    @Field(() => [RolePermissionsScalarWhereInput], {nullable:true})
    @Type(() => RolePermissionsScalarWhereInput)
    deleteMany?: Array<RolePermissionsScalarWhereInput>;
}
