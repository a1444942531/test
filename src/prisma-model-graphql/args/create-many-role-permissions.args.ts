import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RolePermissionsCreateManyInput } from '../input/role-permissions-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyRolePermissionsArgs {

    @Field(() => [RolePermissionsCreateManyInput], {nullable:false})
    @Type(() => RolePermissionsCreateManyInput)
    data!: Array<RolePermissionsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
