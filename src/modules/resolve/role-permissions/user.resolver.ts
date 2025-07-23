import { Field, ID, ObjectType, Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Role2 } from './role-permissions.resolver';

@ObjectType()
export class User2 {
    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => [Role2], {nullable:true})
    role?: Array<Role2>;
}

@Resolver(User2)
export class User2Resolver {
    @ResolveField(() => [Role2])
    protected rolePermissions2(@Parent() role: { id: string }) {
        console.log("----------------->1", role)
        return {
            id: "asdiajsidjas"
        }
    }
}
