import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { PERMISSION_KEY } from 'src/descorators/role-permission.descorator';

@Injectable()
export class RolePermissionGuard implements CanActivate {
  constructor(private reflector: Reflector) { }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const classPermission = this.reflector.get(PERMISSION_KEY, context.getClass())
    console.log(
      'classPermission',
      classPermission
    )

    const handlerPermission = this.reflector.get(PERMISSION_KEY, context.getHandler())
    console.log(
      'handlerPermission',
      handlerPermission
    )

    // const handlerPermission = this.reflector.get(PERMISSION_KEY)

    return true;
  }
}
