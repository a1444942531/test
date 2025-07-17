import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../enum/sort-order.enum';
import { RoleOrderByWithRelationInput } from './role-order-by-with-relation.input';
import { PermissionOrderByWithRelationInput } from './permission-order-by-with-relation.input';
import { RolePermissionsOrderByRelevanceInput } from './role-permissions-order-by-relevance.input';

@InputType()
export class RolePermissionsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    roleId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    permissionId?: `${SortOrder}`;

    @Field(() => RoleOrderByWithRelationInput, {nullable:true})
    role?: RoleOrderByWithRelationInput;

    @Field(() => PermissionOrderByWithRelationInput, {nullable:true})
    permission?: PermissionOrderByWithRelationInput;

    @Field(() => RolePermissionsOrderByRelevanceInput, {nullable:true})
    _relevance?: RolePermissionsOrderByRelevanceInput;
}
