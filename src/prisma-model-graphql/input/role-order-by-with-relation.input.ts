import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../enum/sort-order.enum';
import { SortOrderInput } from './sort-order.input';
import { UserRoleOrderByRelationAggregateInput } from './user-role-order-by-relation-aggregate.input';
import { RolePermissionsOrderByRelationAggregateInput } from './role-permissions-order-by-relation-aggregate.input';
import { RoleOrderByRelevanceInput } from './role-order-by-relevance.input';

@InputType()
export class RoleOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => UserRoleOrderByRelationAggregateInput, {nullable:true})
    users?: UserRoleOrderByRelationAggregateInput;

    @Field(() => RolePermissionsOrderByRelationAggregateInput, {nullable:true})
    rolePermissions?: RolePermissionsOrderByRelationAggregateInput;

    @Field(() => RoleOrderByRelevanceInput, {nullable:true})
    _relevance?: RoleOrderByRelevanceInput;
}
