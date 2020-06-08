import { ObjectType, Field } from "@nestjs/graphql";

@ObjectType()
export class TestResponse {
    @Field()
    value!: string;
}