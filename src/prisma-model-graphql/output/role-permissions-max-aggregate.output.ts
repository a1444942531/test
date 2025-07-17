import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class RolePermissionsMaxAggregate {

    @Field(() => String, {nullable:true})
    roleId?: string;

    @Field(() => String, {nullable:true})
    permissionId?: string;
}
