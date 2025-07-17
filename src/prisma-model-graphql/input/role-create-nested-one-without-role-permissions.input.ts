import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleCreateWithoutRolePermissionsInput } from './role-create-without-role-permissions.input';
import { Type } from 'class-transformer';
import { RoleCreateOrConnectWithoutRolePermissionsInput } from './role-create-or-connect-without-role-permissions.input';
import { Prisma } from '@prisma/client';
import { RoleWhereUniqueInput } from './role-where-unique.input';

@InputType()
export class RoleCreateNestedOneWithoutRolePermissionsInput {

    @Field(() => RoleCreateWithoutRolePermissionsInput, {nullable:true})
    @Type(() => RoleCreateWithoutRolePermissionsInput)
    create?: RoleCreateWithoutRolePermissionsInput;

    @Field(() => RoleCreateOrConnectWithoutRolePermissionsInput, {nullable:true})
    @Type(() => RoleCreateOrConnectWithoutRolePermissionsInput)
    connectOrCreate?: RoleCreateOrConnectWithoutRolePermissionsInput;

    @Field(() => RoleWhereUniqueInput, {nullable:true})
    @Type(() => RoleWhereUniqueInput)
    connect?: Prisma.AtLeast<RoleWhereUniqueInput, 'id' | 'name'>;
}
