import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RolePermissionsCreateWithoutRoleInput } from './role-permissions-create-without-role.input';
import { Type } from 'class-transformer';
import { RolePermissionsCreateOrConnectWithoutRoleInput } from './role-permissions-create-or-connect-without-role.input';
import { RolePermissionsUpsertWithWhereUniqueWithoutRoleInput } from './role-permissions-upsert-with-where-unique-without-role.input';
import { RolePermissionsCreateManyRoleInputEnvelope } from './role-permissions-create-many-role-input-envelope.input';
import { Prisma } from '@prisma/client';
import { RolePermissionsWhereUniqueInput } from './role-permissions-where-unique.input';
import { RolePermissionsUpdateWithWhereUniqueWithoutRoleInput } from './role-permissions-update-with-where-unique-without-role.input';
import { RolePermissionsUpdateManyWithWhereWithoutRoleInput } from './role-permissions-update-many-with-where-without-role.input';
import { RolePermissionsScalarWhereInput } from './role-permissions-scalar-where.input';

@InputType()
export class RolePermissionsUncheckedUpdateManyWithoutRoleNestedInput {

    @Field(() => [RolePermissionsCreateWithoutRoleInput], {nullable:true})
    @Type(() => RolePermissionsCreateWithoutRoleInput)
    create?: Array<RolePermissionsCreateWithoutRoleInput>;

    @Field(() => [RolePermissionsCreateOrConnectWithoutRoleInput], {nullable:true})
    @Type(() => RolePermissionsCreateOrConnectWithoutRoleInput)
    connectOrCreate?: Array<RolePermissionsCreateOrConnectWithoutRoleInput>;

    @Field(() => [RolePermissionsUpsertWithWhereUniqueWithoutRoleInput], {nullable:true})
    @Type(() => RolePermissionsUpsertWithWhereUniqueWithoutRoleInput)
    upsert?: Array<RolePermissionsUpsertWithWhereUniqueWithoutRoleInput>;

    @Field(() => RolePermissionsCreateManyRoleInputEnvelope, {nullable:true})
    @Type(() => RolePermissionsCreateManyRoleInputEnvelope)
    createMany?: RolePermissionsCreateManyRoleInputEnvelope;

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

    @Field(() => [RolePermissionsUpdateWithWhereUniqueWithoutRoleInput], {nullable:true})
    @Type(() => RolePermissionsUpdateWithWhereUniqueWithoutRoleInput)
    update?: Array<RolePermissionsUpdateWithWhereUniqueWithoutRoleInput>;

    @Field(() => [RolePermissionsUpdateManyWithWhereWithoutRoleInput], {nullable:true})
    @Type(() => RolePermissionsUpdateManyWithWhereWithoutRoleInput)
    updateMany?: Array<RolePermissionsUpdateManyWithWhereWithoutRoleInput>;

    @Field(() => [RolePermissionsScalarWhereInput], {nullable:true})
    @Type(() => RolePermissionsScalarWhereInput)
    deleteMany?: Array<RolePermissionsScalarWhereInput>;
}
