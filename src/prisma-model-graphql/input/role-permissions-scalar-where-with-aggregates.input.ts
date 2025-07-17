import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from './string-with-aggregates-filter.input';

@InputType()
export class RolePermissionsScalarWhereWithAggregatesInput {

    @Field(() => [RolePermissionsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<RolePermissionsScalarWhereWithAggregatesInput>;

    @Field(() => [RolePermissionsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<RolePermissionsScalarWhereWithAggregatesInput>;

    @Field(() => [RolePermissionsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<RolePermissionsScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    roleId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    permissionId?: StringWithAggregatesFilter;
}
