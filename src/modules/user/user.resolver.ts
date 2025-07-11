import { UseGuards, UseInterceptors } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { SerializeInterceptor } from 'src/common/interceptors/serialize.interceptor';
import { AuthGuard } from 'src/utils/auth.guard';
import { Public } from 'src/utils/public.decorator';

import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Exclude } from 'class-transformer';

@ObjectType()
export class User {

    @Field(() => ID, { nullable: false })
    id!: string;

    @Field(() => String, { nullable: false })
    username!: string;

    @Exclude()
    @Field(() => String, { nullable: false })
    password!: string;
}

@Resolver()
@UseGuards(AuthGuard)
@UseInterceptors(SerializeInterceptor)
export class UserResolver {
    @Query(() => String, {
        description: "得到用户信息"
    })
    async user() {
        return '123456'
    }

    @Query(() => String, {
        description: '用户列表'
    })
    @Public()
    async list() {
        return 'aaa'
    }

    @Query(() => User)
    async test2() {

    }
}
