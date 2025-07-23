import { Field, ID, ObjectType, Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Role } from 'src/prisma-model-graphql/model/role.model';
import { User2 } from './user.resolver';

@ObjectType()
export class Role2 {
    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => [User2], {nullable:true})
    users?: Array<User2>;
}

@Resolver(() => Role)
export class RolePermissionsResolver {
    @ResolveField(() => [Role2])
    protected rolePermissions2(@Parent() role: { id: string }) {
        return [{
            id: "aisjdiasjd"
        }]
    }
}
