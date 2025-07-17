import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../enum/sort-order.enum';
import { SortOrderInput } from './sort-order.input';
import { RolePermissionsOrderByRelationAggregateInput } from './role-permissions-order-by-relation-aggregate.input';
import { PermissionOrderByRelevanceInput } from './permission-order-by-relevance.input';

@InputType()
export class PermissionOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    action?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => RolePermissionsOrderByRelationAggregateInput, {nullable:true})
    rolePermissions?: RolePermissionsOrderByRelationAggregateInput;

    @Field(() => PermissionOrderByRelevanceInput, {nullable:true})
    _relevance?: PermissionOrderByRelevanceInput;
}
