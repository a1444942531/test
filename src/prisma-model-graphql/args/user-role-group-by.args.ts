import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserRoleWhereInput } from '../input/user-role-where.input';
import { Type } from 'class-transformer';
import { UserRoleOrderByWithAggregationInput } from '../input/user-role-order-by-with-aggregation.input';
import { UserRoleScalarFieldEnum } from '../enum/user-role-scalar-field.enum';
import { UserRoleScalarWhereWithAggregatesInput } from '../input/user-role-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { UserRoleCountAggregateInput } from '../input/user-role-count-aggregate.input';
import { UserRoleMinAggregateInput } from '../input/user-role-min-aggregate.input';
import { UserRoleMaxAggregateInput } from '../input/user-role-max-aggregate.input';

@ArgsType()
export class UserRoleGroupByArgs {

    @Field(() => UserRoleWhereInput, {nullable:true})
    @Type(() => UserRoleWhereInput)
    where?: UserRoleWhereInput;

    @Field(() => [UserRoleOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UserRoleOrderByWithAggregationInput>;

    @Field(() => [UserRoleScalarFieldEnum], {nullable:false})
    by!: Array<`${UserRoleScalarFieldEnum}`>;

    @Field(() => UserRoleScalarWhereWithAggregatesInput, {nullable:true})
    having?: UserRoleScalarWhereWithAggregatesInput;

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
