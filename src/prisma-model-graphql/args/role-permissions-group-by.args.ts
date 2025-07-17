import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RolePermissionsWhereInput } from '../input/role-permissions-where.input';
import { Type } from 'class-transformer';
import { RolePermissionsOrderByWithAggregationInput } from '../input/role-permissions-order-by-with-aggregation.input';
import { RolePermissionsScalarFieldEnum } from '../enum/role-permissions-scalar-field.enum';
import { RolePermissionsScalarWhereWithAggregatesInput } from '../input/role-permissions-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { RolePermissionsCountAggregateInput } from '../input/role-permissions-count-aggregate.input';
import { RolePermissionsMinAggregateInput } from '../input/role-permissions-min-aggregate.input';
import { RolePermissionsMaxAggregateInput } from '../input/role-permissions-max-aggregate.input';

@ArgsType()
export class RolePermissionsGroupByArgs {

    @Field(() => RolePermissionsWhereInput, {nullable:true})
    @Type(() => RolePermissionsWhereInput)
    where?: RolePermissionsWhereInput;

    @Field(() => [RolePermissionsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<RolePermissionsOrderByWithAggregationInput>;

    @Field(() => [RolePermissionsScalarFieldEnum], {nullable:false})
    by!: Array<`${RolePermissionsScalarFieldEnum}`>;

    @Field(() => RolePermissionsScalarWhereWithAggregatesInput, {nullable:true})
    having?: RolePermissionsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => RolePermissionsCountAggregateInput, {nullable:true})
    _count?: RolePermissionsCountAggregateInput;

    @Field(() => RolePermissionsMinAggregateInput, {nullable:true})
    _min?: RolePermissionsMinAggregateInput;

    @Field(() => RolePermissionsMaxAggregateInput, {nullable:true})
    _max?: RolePermissionsMaxAggregateInput;
}
