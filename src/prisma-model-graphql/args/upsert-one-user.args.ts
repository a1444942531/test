import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from '../input/user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateInput } from '../input/user-create.input';
import { UserUpdateInput } from '../input/user-update.input';

@ArgsType()
export class UpsertOneUserArgs {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username'>;

    @Field(() => UserCreateInput, {nullable:false})
    @Type(() => UserCreateInput)
    create!: UserCreateInput;

    @Field(() => UserUpdateInput, {nullable:false})
    @Type(() => UserUpdateInput)
    update!: UserUpdateInput;
}
