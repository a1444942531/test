import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class RolePermissionsCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    roleId?: true;

    @Field(() => Boolean, {nullable:true})
    permissionId?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
