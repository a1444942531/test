import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, ValidateIf } from "class-validator";

@InputType()
export class SearchRoleInput {
    @Field(() => String, { nullable: true })
    @ValidateIf((o) => !o.name)
    @IsNotEmpty({message: "id或用户名不能为空"})
    id?: string

    @Field(() => String, { nullable: true })
    @ValidateIf((o) => !o.id)
    @IsNotEmpty({message: "id或用户名不能为空"})
    name?: string
}