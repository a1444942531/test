import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../enum/sort-order.enum';
import { RoleOrderByWithRelationInput } from './role-order-by-with-relation.input';
import { UserOrderByWithRelationInput } from './user-order-by-with-relation.input';
import { UserRoleOrderByRelevanceInput } from './user-role-order-by-relevance.input';

@InputType()
export class UserRoleOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    roleId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;

    @Field(() => RoleOrderByWithRelationInput, {nullable:true})
    role?: RoleOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;

    @Field(() => UserRoleOrderByRelevanceInput, {nullable:true})
    _relevance?: UserRoleOrderByRelevanceInput;
}
