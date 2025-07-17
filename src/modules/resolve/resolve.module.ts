import { Module } from '@nestjs/common';
import { RolePermissionsResolver } from './role-permissions/role-permissions.resolver';

@Module({
  imports: [],
  controllers: [],
  providers: [RolePermissionsResolver],
  exports: []
})
export class ResolveModule { }
