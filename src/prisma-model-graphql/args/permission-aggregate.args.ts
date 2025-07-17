import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PermissionWhereInput } from '../input/permission-where.input';
import { Type } from 'class-transformer';
import { PermissionOrderByWithRelationInput } from '../input/permission-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PermissionWhereUniqueInput } from '../input/permission-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PermissionCountAggregateInput } from '../input/permission-count-aggregate.input';
import { PermissionMinAggregateInput } from '../input/permission-min-aggregate.input';
import { PermissionMaxAggregateInput } from '../input/permission-max-aggregate.input';

@ArgsType()
export class PermissionAggregateArgs {

    @Field(() => PermissionWhereInput, {nullable:true})
    @Type(() => PermissionWhereInput)
    where?: PermissionWhereInput;

    @Field(() => [PermissionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PermissionOrderByWithRelationInput>;

    @Field(() => PermissionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PermissionWhereUniqueInput, 'id' | 'name'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PermissionCountAggregateInput, {nullable:true})
    _count?: PermissionCountAggregateInput;

    @Field(() => PermissionMinAggregateInput, {nullable:true})
    _min?: PermissionMinAggregateInput;

    @Field(() => PermissionMaxAggregateInput, {nullable:true})
    _max?: PermissionMaxAggregateInput;
}
