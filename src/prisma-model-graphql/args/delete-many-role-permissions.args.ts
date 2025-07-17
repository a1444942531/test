import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RolePermissionsWhereInput } from '../input/role-permissions-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyRolePermissionsArgs {

    @Field(() => RolePermissionsWhereInput, {nullable:true})
    @Type(() => RolePermissionsWhereInput)
    where?: RolePermissionsWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
