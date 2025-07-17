import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Role } from './role.model';
import { Permission } from './permission.model';

@ObjectType()
export class RolePermissions {

    @Field(() => String, {nullable:false})
    roleId!: string;

    @Field(() => String, {nullable:false})
    permissionId!: string;

    @Field(() => Role, {nullable:false})
    role?: Role;

    @Field(() => Permission, {nullable:false})
    permission?: Permission;
}
