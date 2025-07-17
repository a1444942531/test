import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutUserRoleInput } from './user-create-without-user-role.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutUserRoleInput } from './user-create-or-connect-without-user-role.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutUserRoleInput {

    @Field(() => UserCreateWithoutUserRoleInput, {nullable:true})
    @Type(() => UserCreateWithoutUserRoleInput)
    create?: UserCreateWithoutUserRoleInput;

    @Field(() => UserCreateOrConnectWithoutUserRoleInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutUserRoleInput)
    connectOrCreate?: UserCreateOrConnectWithoutUserRoleInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username'>;
}
