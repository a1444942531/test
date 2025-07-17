import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRoleOrderByRelevanceFieldEnum } from '../enum/user-role-order-by-relevance-field.enum';
import { SortOrder } from '../enum/sort-order.enum';

@InputType()
export class UserRoleOrderByRelevanceInput {

    @Field(() => [UserRoleOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<`${UserRoleOrderByRelevanceFieldEnum}`>;

    @Field(() => SortOrder, {nullable:false})
    sort!: `${SortOrder}`;

    @Field(() => String, {nullable:false})
    search!: string;
}
