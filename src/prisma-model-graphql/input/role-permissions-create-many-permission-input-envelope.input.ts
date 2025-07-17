import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RolePermissionsCreateManyPermissionInput } from './role-permissions-create-many-permission.input';
import { Type } from 'class-transformer';

@InputType()
export class RolePermissionsCreateManyPermissionInputEnvelope {

    @Field(() => [RolePermissionsCreateManyPermissionInput], {nullable:false})
    @Type(() => RolePermissionsCreateManyPermissionInput)
    data!: Array<RolePermissionsCreateManyPermissionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
