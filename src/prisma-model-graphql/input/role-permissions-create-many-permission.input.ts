import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class RolePermissionsCreateManyPermissionInput {

    @Field(() => String, {nullable:false})
    roleId!: string;
}
