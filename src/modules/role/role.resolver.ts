import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { RoleService } from './role.service';
import { Role } from 'src/prisma-model-graphql/model/role.model';
import { UpdateRoleInput } from './dto/update-role.input';
import { CreateRoleInput } from './dto/create-role.input';
import { PaginationInput } from 'src/common/dto/pagination.input';
import { SearchRoleInput } from './dto/search-role.input';

@Resolver(() => Role)
export class RoleResolver {
  constructor(private readonly roleService: RoleService) { }

  @Mutation(() => Role)
  createRole(@Args('createRoleInput') createRoleInput: CreateRoleInput) {
    return this.roleService.create(createRoleInput);
  }

  @Query(() => [Role])
  findAllRole(@Args("pagination") pagination: PaginationInput) {
    return this.roleService.findAll(pagination);
  }

  @Query(() => Role)
  findOneRole(@Args('searchRoleInput') searchRoleInput: SearchRoleInput) {
    return this.roleService.findOne(searchRoleInput);
  }

  @Mutation(() => Role)
  updateRole(@Args('updateRoleInput') updateRoleInput: UpdateRoleInput) {
    return this.roleService.update(updateRoleInput);
  }

  @Mutation(() => Role)
  removeRole(@Args('id') id: string) {
    return this.roleService.remove(id);
  }
}
