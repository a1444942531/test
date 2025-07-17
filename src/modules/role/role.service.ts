import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma1.service';
import { CreateRoleInput } from './dto/create-role.input';
import { UpdateRoleInput } from './dto/update-role.input';
import { PaginationInput } from 'src/common/dto/pagination.input';

@Injectable()
export class RoleService {
  constructor(
    private readonly prismaService: PrismaService
  ) { }

  async create(createRoleInput: CreateRoleInput) {
    const { permission, ...data } = createRoleInput

    return await this.prismaService.$transaction(async (prisma: PrismaService) => {

      return prisma.role.create({
        data: {
          ...data,
          rolePermissions: {
            create: permission.map(permission => ({
              permission: {
                // connect查询失败的情况下才会去create
                connectOrCreate: {
                  where: {
                    name: permission.name
                  },
                  create: {
                    ...permission
                  }
                }
              }
            })),
          }
        }
      })
    })
  }

  findAll({ page, pageSize }: PaginationInput) {
    const skip = (page - 1) * pageSize
    const take = pageSize

    return this.prismaService.role.findMany({
      skip,
      take
    })
  }

  findOne(id: string) {
    return this.prismaService.role.findUnique({
      where: { id },
      include: {
        rolePermissions: {
          include: {
            permission: true
          }
        }
      }
    })
  }

  update({ id, description, name }: UpdateRoleInput) {
    return this.prismaService.role.update({
      where: {
        id
      },
      data: {
        description,
        name
      }
    })
  }

  async remove(id: string) {
    return await this.prismaService.role.delete({
      where: {
        id
      }
    }).catch(error => {
      throw error
    })
  }
}
