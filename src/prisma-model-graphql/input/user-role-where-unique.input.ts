import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRoleUserIdRoleIdCompoundUniqueInput } from './user-role-user-id-role-id-compound-unique.input';
import { UserRoleWhereInput } from './user-role-where.input';
import { StringFilter } from './string-filter.input';
import { RoleScalarRelationFilter } from './role-scalar-relation-filter.input';
import { UserScalarRelationFilter } from './user-scalar-relation-filter.input';

@InputType()
export class UserRoleWhereUniqueInput {

    @Field(() => UserRoleUserIdRoleIdCompoundUniqueInput, {nullable:true})
    userId_roleId?: UserRoleUserIdRoleIdCompoundUniqueInput;

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
