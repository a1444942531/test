import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserUpdateInput } from '../input/user-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from '../input/user-where-unique.input';

@ArgsType()
export class UpdateOneUserArgs {

    @Field(() => UserUpdateInput, {nullable:false})
    @Type(() => UserUpdateInput)
    data!: UserUpdateInput;

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username'>;
}
