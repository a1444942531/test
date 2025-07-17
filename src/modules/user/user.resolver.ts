import { UseGuards, UseInterceptors } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SerializeInterceptor } from 'src/common/interceptors/serialize.interceptor';

import { Public } from 'src/descorators/public.decorator';
import { Permission, Read, Update } from 'src/descorators/role-permission.descorator';
import { AuthGuard } from 'src/common/guards/auth.guard';
import { RolePermissionGuard } from 'src/common/guards/role-permission.guard';
import { User } from 'src/prisma-model-graphql/model/user.model';
import { CreateUserInput } from './dto/create-user.dto';
import { UserService } from './user.service';

@Resolver()
@UseGuards(AuthGuard, RolePermissionGuard)
@UseInterceptors(SerializeInterceptor)
@Permission('user')
export class UserResolver {
    constructor(
        private readonly userService: UserService
    ) { }

    @Mutation(() => User)
    @Public()
    createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
        return this.userService.create(createUserInput)
    }

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
