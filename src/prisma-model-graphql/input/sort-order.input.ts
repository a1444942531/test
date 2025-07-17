import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../enum/sort-order.enum';
import { NullsOrder } from '../enum/nulls-order.enum';

@InputType()
export class SortOrderInput {

    @Field(() => SortOrder, {nullable:false})
    sort!: `${SortOrder}`;

    @Field(() => NullsOrder, {nullable:true})
    nulls?: `${NullsOrder}`;
}
