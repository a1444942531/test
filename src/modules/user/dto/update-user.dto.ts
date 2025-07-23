import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, ValidateIf } from "class-validator";
import { CreateRoleInput } from "src/modules/role/dto/create-role.input";

@InputType()
export class UpdateUserInput {
    @Field(() => String, { nullable: true })
    @ValidateIf(o => !o.username)
    @IsNotEmpty({ message: "id或用户名不能为空" })
    id?: string

    @Field(() => String, { nullable: true })
    @ValidateIf(o => !o.id)
    @IsNotEmpty({ message: "id或用户名不能为空" })
    username?: string;

    @Field(() => String, { nullable: true })
    password?: string

    @Field(() => [CreateRoleInput], { nullable: true, defaultValue: [] })
    role?: CreateRoleInput[]
}