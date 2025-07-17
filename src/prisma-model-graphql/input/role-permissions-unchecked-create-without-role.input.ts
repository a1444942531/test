import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class RolePermissionsUncheckedCreateWithoutRoleInput {

    @Field(() => String, {nullable:false})
    permissionId!: string;
}
