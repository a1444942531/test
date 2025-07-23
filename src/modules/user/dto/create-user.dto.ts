import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

@InputType()
export class CreateUserInput {
    @Field(() => String)
    @IsNotEmpty()
    username: string;

    @Field(() => String)
    @IsNotEmpty()
    password: string

    @Field(() => [String], { nullable: true })
    roleIds?: string[]
}