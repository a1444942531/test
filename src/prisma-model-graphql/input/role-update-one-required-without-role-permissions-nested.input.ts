import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleCreateWithoutRolePermissionsInput } from './role-create-without-role-permissions.input';
import { Type } from 'class-transformer';
import { RoleCreateOrConnectWithoutRolePermissionsInput } from './role-create-or-connect-without-role-permissions.input';
import { RoleUpsertWithoutRolePermissionsInput } from './role-upsert-without-role-permissions.input';
import { Prisma } from '@prisma/client';
import { RoleWhereUniqueInput } from './role-where-unique.input';
import { RoleUpdateToOneWithWhereWithoutRolePermissionsInput } from './role-update-to-one-with-where-without-role-permissions.input';

@InputType()
export class RoleUpdateOneRequiredWithoutRolePermissionsNestedInput {

    @Field(() => RoleCreateWithoutRolePermissionsInput, {nullable:true})
    @Type(() => RoleCreateWithoutRolePermissionsInput)
    create?: RoleCreateWithoutRolePermissionsInput;

    @Field(() => RoleCreateOrConnectWithoutRolePermissionsInput, {nullable:true})
    @Type(() => RoleCreateOrConnectWithoutRolePermissionsInput)
    connectOrCreate?: RoleCreateOrConnectWithoutRolePermissionsInput;

    @Field(() => RoleUpsertWithoutRolePermissionsInput, {nullable:true})
    @Type(() => RoleUpsertWithoutRolePermissionsInput)
    upsert?: RoleUpsertWithoutRolePermissionsInput;

    @Field(() => RoleWhereUniqueInput, {nullable:true})
    @Type(() => RoleWhereUniqueInput)
    connect?: Prisma.AtLeast<RoleWhereUniqueInput, 'id' | 'name'>;

    @Field(() => RoleUpdateToOneWithWhereWithoutRolePermissionsInput, {nullable:true})
    @Type(() => RoleUpdateToOneWithWhereWithoutRolePermissionsInput)
    update?: RoleUpdateToOneWithWhereWithoutRolePermissionsInput;
}
