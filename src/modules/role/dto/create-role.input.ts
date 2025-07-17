import { InputType, Field } from '@nestjs/graphql';


// RolePermissions
@InputType()
export class CreatePermission {
  @Field(() => String)
  name: string

  @Field(() => String)
  action: string

  @Field(() => String, { nullable: true })
  description?: string
}

@InputType()
export class CreateRoleInput {
  @Field(() => String)
  name: string;

  @Field(() => String, { nullable: true })
  description?: string

  @Field(() => [CreatePermission])
  permission: CreatePermission[]
}
