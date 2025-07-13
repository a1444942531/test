import { SetMetadata } from "@nestjs/common";

/**
 * 跳过Auth模块的登录验证
 * @returns 
 */
export const Public = () => SetMetadata('isPublic', true)