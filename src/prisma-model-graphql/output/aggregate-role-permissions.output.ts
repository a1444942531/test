import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { RolePermissionsCountAggregate } from './role-permissions-count-aggregate.output';
import { RolePermissionsMinAggregate } from './role-permissions-min-aggregate.output';
import { RolePermissionsMaxAggregate } from './role-permissions-max-aggregate.output';

@ObjectType()
export class AggregateRolePermissions {

    @Field(() => RolePermissionsCountAggregate, {nullable:true})
    _count?: RolePermissionsCountAggregate;

    @Field(() => RolePermissionsMinAggregate, {nullable:true})
    _min?: RolePermissionsMinAggregate;

    @Field(() => RolePermissionsMaxAggregate, {nullable:true})
    _max?: RolePermissionsMaxAggregate;
}
