import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { UserRole } from './user-role.model';
import { UserCount } from '../output/user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: string;

    /**
     * 测试
     */
    @Field(() => String, {description:'测试',nullable:false})
    username!: string;

    @HideField()
    password!: string;

    @Field(() => [UserRole], {nullable:true})
    userRole?: Array<UserRole>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
