import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RolePermissionsCreateManyRoleInput } from './role-permissions-create-many-role.input';
import { Type } from 'class-transformer';

@InputType()
export class RolePermissionsCreateManyRoleInputEnvelope {

    @Field(() => [RolePermissionsCreateManyRoleInput], {nullable:false})
    @Type(() => RolePermissionsCreateManyRoleInput)
    data!: Array<RolePermissionsCreateManyRoleInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
