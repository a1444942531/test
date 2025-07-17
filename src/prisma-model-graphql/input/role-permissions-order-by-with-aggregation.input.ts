import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../enum/sort-order.enum';
import { RolePermissionsCountOrderByAggregateInput } from './role-permissions-count-order-by-aggregate.input';
import { RolePermissionsMaxOrderByAggregateInput } from './role-permissions-max-order-by-aggregate.input';
import { RolePermissionsMinOrderByAggregateInput } from './role-permissions-min-order-by-aggregate.input';

@InputType()
export class RolePermissionsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    roleId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    permissionId?: `${SortOrder}`;

    @Field(() => RolePermissionsCountOrderByAggregateInput, {nullable:true})
    _count?: RolePermissionsCountOrderByAggregateInput;

    @Field(() => RolePermissionsMaxOrderByAggregateInput, {nullable:true})
    _max?: RolePermissionsMaxOrderByAggregateInput;

    @Field(() => RolePermissionsMinOrderByAggregateInput, {nullable:true})
    _min?: RolePermissionsMinOrderByAggregateInput;
}
