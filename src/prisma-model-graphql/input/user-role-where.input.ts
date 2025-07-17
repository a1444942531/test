import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from './string-filter.input';
import { RoleScalarRelationFilter } from './role-scalar-relation-filter.input';
import { UserScalarRelationFilter } from './user-scalar-relation-filter.input';

@InputType()
export class UserRoleWhereInput {

    @Field(() => [UserRoleWhereInput], {nullable:true})
    AND?: Array<UserRoleWhereInput>;

    @Field(() => [UserRoleWhereInput], {nullable:true})
    OR?: Array<UserRoleWhereInput>;

    @Field(() => [UserRoleWhereInput], {nullable:true})
    NOT?: Array<UserRoleWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    roleId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => RoleScalarRelationFilter, {nullable:true})
    role?: RoleScalarRelationFilter;

    @Field(() => UserScalarRelationFilter, {nullable:true})
    user?: UserScalarRelationFilter;
}
