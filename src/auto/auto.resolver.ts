import { Args, Field, InputType, Query, Resolver } from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';
import { AutoService, UserNameServiceDto, UserServiceDto } from './auto.service';
import { verify } from 'argon2';
import { ForbiddenException } from '@nestjs/common';
import { Length } from 'class-validator';

@InputType({ description: "根据用户名查询用户" })
export class UserNameDto extends UserNameServiceDto {
    @Field({ description: "用户名" })
    declare username: string
}

@InputType({ description: "新增用户" })
export class UserDto extends UserNameDto {
    @Field({ description: "密码" })
    @Length(6, 20, { message: "密码至少6位" })
    declare password: string
}

@Resolver()
export class AutoResolver {
    constructor(
        private readonly jwtService: JwtService,
        private readonly autoService: AutoService,
    ) { }

    @Query(() => String, {
        description: "用户登录"
    })
    async signIn(
        @Args('user') user: UserDto
    ) {
        const retUser = await this.autoService.searchByUsername({ username: user.username })
        if (!retUser) {
            throw new ForbiddenException("用户不存在");
        }

        const { id, username, password } = retUser


        const isPasswordValid = await verify(password, user.password)

        if (!isPasswordValid) {
            throw new ForbiddenException("用户名或密码错误");
        }

        return await this.jwtService.signAsync({
            id,
            username
        })
    }

    @Query(() => String, {
        nullable: true,
        description: '创建用户',
    })
    async signUp(
        @Args('user') user: UserDto,
    ) {
        await this.autoService.create(user);

        return "创建成功"
    }
}