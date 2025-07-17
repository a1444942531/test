import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class RolePermissionsCreateManyRoleInput {

    @Field(() => String, {nullable:false})
    permissionId!: string;
}
