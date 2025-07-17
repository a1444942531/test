import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionOrderByRelevanceFieldEnum } from '../enum/permission-order-by-relevance-field.enum';
import { SortOrder } from '../enum/sort-order.enum';

@InputType()
export class PermissionOrderByRelevanceInput {

    @Field(() => [PermissionOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<`${PermissionOrderByRelevanceFieldEnum}`>;

    @Field(() => SortOrder, {nullable:false})
    sort!: `${SortOrder}`;

    @Field(() => String, {nullable:false})
    search!: string;
}
