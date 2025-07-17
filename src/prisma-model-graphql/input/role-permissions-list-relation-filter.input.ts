import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RolePermissionsWhereInput } from './role-permissions-where.input';

@InputType()
export class RolePermissionsListRelationFilter {

    @Field(() => RolePermissionsWhereInput, {nullable:true})
    every?: RolePermissionsWhereInput;

    @Field(() => RolePermissionsWhereInput, {nullable:true})
    some?: RolePermissionsWhereInput;

    @Field(() => RolePermissionsWhereInput, {nullable:true})
    none?: RolePermissionsWhereInput;
}
