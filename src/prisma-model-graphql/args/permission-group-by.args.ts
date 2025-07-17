import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PermissionWhereInput } from '../input/permission-where.input';
import { Type } from 'class-transformer';
import { PermissionOrderByWithAggregationInput } from '../input/permission-order-by-with-aggregation.input';
import { PermissionScalarFieldEnum } from '../enum/permission-scalar-field.enum';
import { PermissionScalarWhereWithAggregatesInput } from '../input/permission-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PermissionCountAggregateInput } from '../input/permission-count-aggregate.input';
import { PermissionMinAggregateInput } from '../input/permission-min-aggregate.input';
import { PermissionMaxAggregateInput } from '../input/permission-max-aggregate.input';

@ArgsType()
export class PermissionGroupByArgs {

    @Field(() => PermissionWhereInput, {nullable:true})
    @Type(() => PermissionWhereInput)
    where?: PermissionWhereInput;

    @Field(() => [PermissionOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PermissionOrderByWithAggregationInput>;

    @Field(() => [PermissionScalarFieldEnum], {nullable:false})
    by!: Array<`${PermissionScalarFieldEnum}`>;

    @Field(() => PermissionScalarWhereWithAggregatesInput, {nullable:true})
    having?: PermissionScalarWhereWithAggregatesInput;

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
