import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RolePermissionsWhereInput } from '../input/role-permissions-where.input';
import { Type } from 'class-transformer';
import { RolePermissionsOrderByWithRelationInput } from '../input/role-permissions-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { RolePermissionsWhereUniqueInput } from '../input/role-permissions-where-unique.input';
import { Int } from '@nestjs/graphql';
import { RolePermissionsCountAggregateInput } from '../input/role-permissions-count-aggregate.input';
import { RolePermissionsMinAggregateInput } from '../input/role-permissions-min-aggregate.input';
import { RolePermissionsMaxAggregateInput } from '../input/role-permissions-max-aggregate.input';

@ArgsType()
export class RolePermissionsAggregateArgs {

    @Field(() => RolePermissionsWhereInput, {nullable:true})
    @Type(() => RolePermissionsWhereInput)
    where?: RolePermissionsWhereInput;

    @Field(() => [RolePermissionsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RolePermissionsOrderByWithRelationInput>;

    @Field(() => RolePermissionsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<RolePermissionsWhereUniqueInput, 'roleId_permissionId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => RolePermissionsCountAggregateInput, {nullable:true})
    _count?: RolePermissionsCountAggregateInput;

    @Field(() => RolePermissionsMinAggregateInput, {nullable:true})
    _min?: RolePermissionsMinAggregateInput;

    @Field(() => RolePermissionsMaxAggregateInput, {nullable:true})
    _max?: RolePermissionsMaxAggregateInput;
}
