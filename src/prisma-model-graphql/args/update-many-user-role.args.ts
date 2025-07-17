import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserRoleUncheckedUpdateManyInput } from '../input/user-role-unchecked-update-many.input';
import { Type } from 'class-transformer';
import { UserRoleWhereInput } from '../input/user-role-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyUserRoleArgs {

    @Field(() => UserRoleUncheckedUpdateManyInput, {nullable:false})
    @Type(() => UserRoleUncheckedUpdateManyInput)
    data!: UserRoleUncheckedUpdateManyInput;

    @Field(() => UserRoleWhereInput, {nullable:true})
    @Type(() => UserRoleWhereInput)
    where?: UserRoleWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
