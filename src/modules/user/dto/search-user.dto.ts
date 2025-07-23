import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class SearchUserInput {
    @Field(() => String, { nullable: true })
    id?: string;

    @Field(() => String, { nullable: true })
    username?: string
}
