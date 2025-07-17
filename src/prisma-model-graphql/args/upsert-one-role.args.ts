import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RoleWhereUniqueInput } from '../input/role-where-unique.input';
import { Type } from 'class-transformer';
import { RoleCreateInput } from '../input/role-create.input';
import { RoleUpdateInput } from '../input/role-update.input';

@ArgsType()
export class UpsertOneRoleArgs {

    @Field(() => RoleWhereUniqueInput, {nullable:false})
    @Type(() => RoleWhereUniqueInput)
    where!: Prisma.AtLeast<RoleWhereUniqueInput, 'id' | 'name'>;

    @Field(() => RoleCreateInput, {nullable:false})
    @Type(() => RoleCreateInput)
    create!: RoleCreateInput;

    @Field(() => RoleUpdateInput, {nullable:false})
    @Type(() => RoleUpdateInput)
    update!: RoleUpdateInput;
}
