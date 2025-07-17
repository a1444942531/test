import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class RolePermissionsMinAggregate {

    @Field(() => String, {nullable:true})
    roleId?: string;

    @Field(() => String, {nullable:true})
    permissionId?: string;
}
