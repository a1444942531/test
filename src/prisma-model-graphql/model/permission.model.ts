import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { RolePermissions } from './role-permissions.model';
import { PermissionCount } from '../output/permission-count.output';

@ObjectType()
export class Permission {

    @Field(() => ID, {nullable:false})
    id!: string;

    /**
     * ControllerName + RouteName -> user:create
     */
    @Field(() => String, {description:'ControllerName + RouteName -> user:create',nullable:false})
    name!: string;

    /**
     * action: READ, CREATE, UPDATE, DELETE, MANAGE
     */
    @Field(() => String, {description:'action: READ, CREATE, UPDATE, DELETE, MANAGE',nullable:false})
    action!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => [RolePermissions], {nullable:true})
    rolePermissions?: Array<RolePermissions>;

    @Field(() => PermissionCount, {nullable:false})
    _count?: PermissionCount;
}
