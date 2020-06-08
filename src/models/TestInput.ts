import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class TestInput {
    @Field(_ => String)
    stringField: string;

    @Field(_ => Date)
    dateField: Date;
}