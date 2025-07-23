import { Module } from '@nestjs/common';
import { RolePermissionsResolver } from './role-permissions/role-permissions.resolver';
import { User2Resolver } from './role-permissions/user.resolver';

@Module({
  imports: [],
  controllers: [],
  providers: [RolePermissionsResolver, User2Resolver],
  exports: []
})
export class ResolveModule { }
