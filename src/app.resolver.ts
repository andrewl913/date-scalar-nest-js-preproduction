
import { Mutation, Args, Resolver, Query } from '@nestjs/graphql';
import { TestInput } from './models/TestInput';
import { TestResponse } from './models/TestResponse';

@Resolver(TestResponse)
export class AppResolver {
  @Mutation(_ => String)
  create(@Args("testInput") testInput: TestInput): string {
    console.log(testInput);
    return "hello"
  }

  @Query(_ => TestResponse)
  testResponse(): TestResponse {
    return {
      value: "Test value"
    }
  }
}
