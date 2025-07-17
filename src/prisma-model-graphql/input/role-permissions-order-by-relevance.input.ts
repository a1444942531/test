import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RolePermissionsOrderByRelevanceFieldEnum } from '../enum/role-permissions-order-by-relevance-field.enum';
import { SortOrder } from '../enum/sort-order.enum';

@InputType()
export class RolePermissionsOrderByRelevanceInput {

    @Field(() => [RolePermissionsOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<`${RolePermissionsOrderByRelevanceFieldEnum}`>;

    @Field(() => SortOrder, {nullable:false})
    sort!: `${SortOrder}`;

    @Field(() => String, {nullable:false})
    search!: string;
}
