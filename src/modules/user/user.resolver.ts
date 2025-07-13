import { UseGuards, UseInterceptors } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { SerializeInterceptor } from 'src/common/interceptors/serialize.interceptor';

import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Exclude } from 'class-transformer';
import { Public } from 'src/descorators/public.decorator';
import { Permission, Read, Update } from 'src/descorators/role-permission.descorator';
import { AuthGuard } from 'src/common/guards/auth.guard';
import { RolePermissionGuard } from 'src/common/guards/role-permission.guard';

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
@UseGuards(AuthGuard, RolePermissionGuard)
@UseInterceptors(SerializeInterceptor)
@Permission('user')
export class UserResolver {
    @Query(() => String, {
        description: "得到用户信息"
    })
    @Update()
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

    @Query(() => String)
    @Read()
    async test2() {
        return '123'
    }
}
