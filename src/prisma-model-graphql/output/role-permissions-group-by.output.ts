import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { RolePermissionsCountAggregate } from './role-permissions-count-aggregate.output';
import { RolePermissionsMinAggregate } from './role-permissions-min-aggregate.output';
import { RolePermissionsMaxAggregate } from './role-permissions-max-aggregate.output';

@ObjectType()
export class RolePermissionsGroupBy {

    @Field(() => String, {nullable:false})
    roleId!: string;

    @Field(() => String, {nullable:false})
    permissionId!: string;

    @Field(() => RolePermissionsCountAggregate, {nullable:true})
    _count?: RolePermissionsCountAggregate;

    @Field(() => RolePermissionsMinAggregate, {nullable:true})
    _min?: RolePermissionsMinAggregate;

    @Field(() => RolePermissionsMaxAggregate, {nullable:true})
    _max?: RolePermissionsMaxAggregate;
}
