import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionCreateWithoutRolePermissionsInput } from './permission-create-without-role-permissions.input';
import { Type } from 'class-transformer';
import { PermissionCreateOrConnectWithoutRolePermissionsInput } from './permission-create-or-connect-without-role-permissions.input';
import { PermissionUpsertWithoutRolePermissionsInput } from './permission-upsert-without-role-permissions.input';
import { Prisma } from '@prisma/client';
import { PermissionWhereUniqueInput } from './permission-where-unique.input';
import { PermissionUpdateToOneWithWhereWithoutRolePermissionsInput } from './permission-update-to-one-with-where-without-role-permissions.input';

@InputType()
export class PermissionUpdateOneRequiredWithoutRolePermissionsNestedInput {

    @Field(() => PermissionCreateWithoutRolePermissionsInput, {nullable:true})
    @Type(() => PermissionCreateWithoutRolePermissionsInput)
    create?: PermissionCreateWithoutRolePermissionsInput;

    @Field(() => PermissionCreateOrConnectWithoutRolePermissionsInput, {nullable:true})
    @Type(() => PermissionCreateOrConnectWithoutRolePermissionsInput)
    connectOrCreate?: PermissionCreateOrConnectWithoutRolePermissionsInput;

    @Field(() => PermissionUpsertWithoutRolePermissionsInput, {nullable:true})
    @Type(() => PermissionUpsertWithoutRolePermissionsInput)
    upsert?: PermissionUpsertWithoutRolePermissionsInput;

    @Field(() => PermissionWhereUniqueInput, {nullable:true})
    @Type(() => PermissionWhereUniqueInput)
    connect?: Prisma.AtLeast<PermissionWhereUniqueInput, 'id' | 'name'>;

    @Field(() => PermissionUpdateToOneWithWhereWithoutRolePermissionsInput, {nullable:true})
    @Type(() => PermissionUpdateToOneWithWhereWithoutRolePermissionsInput)
    update?: PermissionUpdateToOneWithWhereWithoutRolePermissionsInput;
}
