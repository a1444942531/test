import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserOrderByRelevanceFieldEnum } from '../enum/user-order-by-relevance-field.enum';
import { SortOrder } from '../enum/sort-order.enum';

@InputType()
export class UserOrderByRelevanceInput {

    @Field(() => [UserOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<`${UserOrderByRelevanceFieldEnum}`>;

    @Field(() => SortOrder, {nullable:false})
    sort!: `${SortOrder}`;

    @Field(() => String, {nullable:false})
    search!: string;
}
