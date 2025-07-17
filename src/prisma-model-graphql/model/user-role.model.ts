import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Role } from './role.model';
import { User } from './user.model';

@ObjectType()
export class UserRole {

    @Field(() => String, {nullable:false})
    roleId!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => Role, {nullable:false})
    role?: Role;

    @Field(() => User, {nullable:false})
    user?: User;
}
