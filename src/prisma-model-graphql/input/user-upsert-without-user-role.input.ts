import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutUserRoleInput } from './user-update-without-user-role.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutUserRoleInput } from './user-create-without-user-role.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutUserRoleInput {

    @Field(() => UserUpdateWithoutUserRoleInput, {nullable:false})
    @Type(() => UserUpdateWithoutUserRoleInput)
    update!: UserUpdateWithoutUserRoleInput;

    @Field(() => UserCreateWithoutUserRoleInput, {nullable:false})
    @Type(() => UserCreateWithoutUserRoleInput)
    create!: UserCreateWithoutUserRoleInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
