import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RolePermissionsUncheckedUpdateManyInput } from '../input/role-permissions-unchecked-update-many.input';
import { Type } from 'class-transformer';
import { RolePermissionsWhereInput } from '../input/role-permissions-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyRolePermissionsArgs {

    @Field(() => RolePermissionsUncheckedUpdateManyInput, {nullable:false})
    @Type(() => RolePermissionsUncheckedUpdateManyInput)
    data!: RolePermissionsUncheckedUpdateManyInput;

    @Field(() => RolePermissionsWhereInput, {nullable:true})
    @Type(() => RolePermissionsWhereInput)
    where?: RolePermissionsWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
