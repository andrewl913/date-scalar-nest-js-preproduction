import { Module } from '@nestjs/common';
import { GraphQLFederationModule, GraphQLModule } from "@nestjs/graphql";
import { AppResolver } from './app.resolver';

@Module({
  // Change to GraphQLModule here for a working example.
  imports: [GraphQLFederationModule.forRoot({
    autoSchemaFile: "src/schema.graphql",
    path: "/test"
  }),
    AppResolver
  ]
})
export class AppModule { }
