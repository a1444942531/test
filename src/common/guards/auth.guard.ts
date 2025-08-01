import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Reflector } from "@nestjs/core";
import { GqlExecutionContext } from "@nestjs/graphql";
import { JwtService } from "@nestjs/jwt";
import { Request } from "express";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private readonly jwtService: JwtService,
        private readonly configService: ConfigService,
        private readonly reflector: Reflector,
    ) { }

    async canActivate(context: ExecutionContext) {
        const ctx = GqlExecutionContext.create(context);
        const request = ctx.getContext<{ req: Request }>().req

        // 跳过验证
        const isPublic = this.reflector.get('isPublic', ctx.getHandler())
        if (isPublic) {
            return true
        }

        const token = this.extractTokenFromHeader(request)

        if (!token) {
            throw new UnauthorizedException()
        }

        try {
            const payload = await this.jwtService.verifyAsync(token, {
                secret: this.configService.get("JWT_SECRET")
            })
            // request['user'] = payload
        } catch (error) {
            throw new UnauthorizedException()
        }

        return true
    }

    extractTokenFromHeader(request: Request) {
        const [type, token] = request.headers.authorization?.split(' ') ?? []
        return type == 'Bearer' ? token : undefined
    }
}
