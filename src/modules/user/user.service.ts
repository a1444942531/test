import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.dto';
import { PrismaService } from 'src/database/prisma/prisma1.service';
import { hash } from 'argon2';
import { ConfigService } from '@nestjs/config';

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

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #id user`;
  }

  update(id: number) {
    return `This action updates a #id user`;
  }

  remove(id: number) {
    return `This action removes a #id user`;
  }
}
