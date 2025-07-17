import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutUserRoleInput } from './user-update-without-user-role.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutUserRoleInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutUserRoleInput, {nullable:false})
    @Type(() => UserUpdateWithoutUserRoleInput)
    data!: UserUpdateWithoutUserRoleInput;
}
