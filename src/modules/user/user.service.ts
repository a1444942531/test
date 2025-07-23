import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.dto';
import { PrismaService } from 'src/database/prisma/prisma1.service';
import { hash } from 'argon2';
import { ConfigService } from '@nestjs/config';
import { SearchUserInput } from './dto/search-user.dto';
import { UpdateUserInput } from './dto/update-user.dto';
import { ForbiddenError } from '@nestjs/apollo';

@Injectable()
export class UserService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly configService: ConfigService
  ) { }

  async create(createUserInput: CreateUserInput) {
    const DEFAULT_ROLE_ID = this.configService.get("ROLE_ID")

    const newHashPass = await hash(createUserInput.password)
    const userObj = { ...createUserInput, password: newHashPass }
    // 创建关联操作 要么成功要么回滚
    return await this.prismaService.$transaction(async (prisma: PrismaService) => {
      const roleIds = userObj.roleIds || [DEFAULT_ROLE_ID]
      const validRoleIds: string[] = []

      for (const roleId of roleIds) {
        const role = await prisma.role.findUnique({
          where: {
            id: roleId
          }
        })

        if (role) {
          validRoleIds.push(roleId)
        }
      }

      if (validRoleIds.length === 0) {
        validRoleIds.push(DEFAULT_ROLE_ID)
      }

      return prisma.user.create({
        data: {
          ...userObj,
          userRole: {
            create: validRoleIds.map(roleId => ({ roleId }))
          }
        }
      })
    })
  }

  findAll(searchUsername: SearchUserInput) {
    return this.prismaService.user.findUnique({
      where: {
        username: searchUsername.username,
        id: searchUsername.id
      },
      include: {
        userRole: {
          include: {
            role: {
              include: {
                rolePermissions: true
              }
            }
          }
        }
      }
    })
  }

  findOne(searchUsername: SearchUserInput) {
    return this.prismaService.user.findUnique({
      where: {
        username: searchUsername.username,
        id: searchUsername.id
      },
      include: {
        userRole: {
          include: {
            role: {
              include: {
                rolePermissions: true
              }
            }
          }
        }
      }
    })
  }

  async update(updateUserInput: UpdateUserInput) {
    const { id, password, role, username } = updateUserInput

    return await this.prismaService.$transaction(async (prisma: PrismaService) => {
      if (id || username) {
      } else {
        throw new ForbiddenError("数据不存在")
      }

      if (password) {
        const newHashPass = await hash(password)
        updateUserInput.password = newHashPass
      }

    })


    return `This action updates a #id user`;
  }

  remove(id: number) {
    return `This action removes a #id user`;
  }
}
