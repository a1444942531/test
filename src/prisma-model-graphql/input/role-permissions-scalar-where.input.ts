import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from './string-filter.input';

@InputType()
export class RolePermissionsScalarWhereInput {

    @Field(() => [RolePermissionsScalarWhereInput], {nullable:true})
    AND?: Array<RolePermissionsScalarWhereInput>;

    @Field(() => [RolePermissionsScalarWhereInput], {nullable:true})
    OR?: Array<RolePermissionsScalarWhereInput>;

    @Field(() => [RolePermissionsScalarWhereInput], {nullable:true})
    NOT?: Array<RolePermissionsScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    roleId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    permissionId?: StringFilter;
}
