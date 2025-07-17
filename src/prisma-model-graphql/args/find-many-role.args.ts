import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RoleWhereInput } from '../input/role-where.input';
import { Type } from 'class-transformer';
import { RoleOrderByWithRelationInput } from '../input/role-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { RoleWhereUniqueInput } from '../input/role-where-unique.input';
import { Int } from '@nestjs/graphql';
import { RoleScalarFieldEnum } from '../enum/role-scalar-field.enum';

@ArgsType()
export class FindManyRoleArgs {

    @Field(() => RoleWhereInput, {nullable:true})
    @Type(() => RoleWhereInput)
    where?: RoleWhereInput;

    @Field(() => [RoleOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RoleOrderByWithRelationInput>;

    @Field(() => RoleWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<RoleWhereUniqueInput, 'id' | 'name'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [RoleScalarFieldEnum], {nullable:true})
    distinct?: Array<`${RoleScalarFieldEnum}`>;
}
