import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../enum/sort-order.enum';

@InputType()
export class RolePermissionsMaxOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    roleId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    permissionId?: `${SortOrder}`;
}
