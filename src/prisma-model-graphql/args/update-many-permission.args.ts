import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PermissionUpdateManyMutationInput } from '../input/permission-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PermissionWhereInput } from '../input/permission-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyPermissionArgs {

    @Field(() => PermissionUpdateManyMutationInput, {nullable:false})
    @Type(() => PermissionUpdateManyMutationInput)
    data!: PermissionUpdateManyMutationInput;

    @Field(() => PermissionWhereInput, {nullable:true})
    @Type(() => PermissionWhereInput)
    where?: PermissionWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
