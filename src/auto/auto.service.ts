import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma1.service';
import { Length } from 'class-validator';
import { hash } from 'argon2';
import { ForbiddenError } from '@nestjs/apollo';
import { ValidateArgs } from 'src/utils/ValidateArgs';

export class UserNameServiceDto {
  @Length(3, 6, { message: "用户名必须在3到6位之间" })
  username: string
}

export class UserServiceDto extends UserNameServiceDto {
  @Length(6, 20, { message: "密码至少6位" })
  password: string
}

@Injectable()
export class AutoService {
  constructor(
    private readonly prismaService: PrismaService,
  ) { }

  @ValidateArgs(UserNameServiceDto)
  async searchByUsername({ username }: UserNameServiceDto, isId: boolean = true) {
    const user = await this.prismaService.user.findUnique({
      select: {
        id: true,
        password: true,
        username: true,
      },
      where: {
        username
      }
    })

    return user
  }

  @ValidateArgs(UserServiceDto)
  async create(data: UserServiceDto) {
    const { username, password } = data

    const user = await this.prismaService.user.findUnique({
      where: {
        username
      }
    })

    if (user) {
      throw new ForbiddenError("用户已存在")
    }

    return await this.prismaService.user.create({
      // select: {
      //   id: true
      // },
      data: {
        username,
        password: await hash(password)
      }
    })
  }
}
