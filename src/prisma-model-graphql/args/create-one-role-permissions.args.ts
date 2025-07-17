import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RolePermissionsCreateInput } from '../input/role-permissions-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneRolePermissionsArgs {

    @Field(() => RolePermissionsCreateInput, {nullable:false})
    @Type(() => RolePermissionsCreateInput)
    data!: RolePermissionsCreateInput;
}
