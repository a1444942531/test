import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutUserRoleInput } from './user-create-without-user-role.input';

@InputType()
export class UserCreateOrConnectWithoutUserRoleInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username'>;

    @Field(() => UserCreateWithoutUserRoleInput, {nullable:false})
    @Type(() => UserCreateWithoutUserRoleInput)
    create!: UserCreateWithoutUserRoleInput;
}
