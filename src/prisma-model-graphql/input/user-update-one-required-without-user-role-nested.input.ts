import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutUserRoleInput } from './user-create-without-user-role.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutUserRoleInput } from './user-create-or-connect-without-user-role.input';
import { UserUpsertWithoutUserRoleInput } from './user-upsert-without-user-role.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutUserRoleInput } from './user-update-to-one-with-where-without-user-role.input';

@InputType()
export class UserUpdateOneRequiredWithoutUserRoleNestedInput {

    @Field(() => UserCreateWithoutUserRoleInput, {nullable:true})
    @Type(() => UserCreateWithoutUserRoleInput)
    create?: UserCreateWithoutUserRoleInput;

    @Field(() => UserCreateOrConnectWithoutUserRoleInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutUserRoleInput)
    connectOrCreate?: UserCreateOrConnectWithoutUserRoleInput;

    @Field(() => UserUpsertWithoutUserRoleInput, {nullable:true})
    @Type(() => UserUpsertWithoutUserRoleInput)
    upsert?: UserUpsertWithoutUserRoleInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username'>;

    @Field(() => UserUpdateToOneWithWhereWithoutUserRoleInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutUserRoleInput)
    update?: UserUpdateToOneWithWhereWithoutUserRoleInput;
}
