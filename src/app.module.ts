import { Module } from '@nestjs/common';
import { GraphQLFederationModule, GraphQLModule } from "@nestjs/graphql";
import { AppResolver } from './app.resolver';

@Module({
  imports: [GraphQLFederationModule.forRoot({
    autoSchemaFile: "src/schema.graphql",
    path: "/test"
  }),
    AppResolver
  ]
})
export class AppModule { }
