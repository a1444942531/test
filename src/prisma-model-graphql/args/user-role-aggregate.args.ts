import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserRoleWhereInput } from '../input/user-role-where.input';
import { Type } from 'class-transformer';
import { UserRoleOrderByWithRelationInput } from '../input/user-role-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { UserRoleWhereUniqueInput } from '../input/user-role-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserRoleCountAggregateInput } from '../input/user-role-count-aggregate.input';
import { UserRoleMinAggregateInput } from '../input/user-role-min-aggregate.input';
import { UserRoleMaxAggregateInput } from '../input/user-role-max-aggregate.input';

@ArgsType()
export class UserRoleAggregateArgs {

    @Field(() => UserRoleWhereInput, {nullable:true})
    @Type(() => UserRoleWhereInput)
    where?: UserRoleWhereInput;

    @Field(() => [UserRoleOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserRoleOrderByWithRelationInput>;

    @Field(() => UserRoleWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UserRoleWhereUniqueInput, 'userId_roleId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => UserRoleCountAggregateInput, {nullable:true})
    _count?: UserRoleCountAggregateInput;

    @Field(() => UserRoleMinAggregateInput, {nullable:true})
    _min?: UserRoleMinAggregateInput;

    @Field(() => UserRoleMaxAggregateInput, {nullable:true})
    _max?: UserRoleMaxAggregateInput;
}
