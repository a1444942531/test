import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Role } from 'src/prisma-model-graphql/model/role.model';

@Resolver('Post')
export class RolePermissionsResolver {
    @ResolveField(() => String)
    protected rolePermissions(@Parent() role: { id: string }) {
        console.log("----------------->", role)
        return "456"
    }
}
