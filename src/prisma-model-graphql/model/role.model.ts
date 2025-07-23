import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { UserRole } from './user-role.model';
import { RolePermissions } from './role-permissions.model';
import { RoleCount } from '../output/role-count.output';

@ObjectType()
export class Role {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => [UserRole], {nullable:true})
    users?: Array<UserRole>;

    @Field(() => [RolePermissions], {nullable:true})
    rolePermissions?: Array<RolePermissions>;

    @Field(() => RoleCount, {nullable:false})
    _count?: RoleCount;
}
