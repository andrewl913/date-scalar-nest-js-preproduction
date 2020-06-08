
## Description

Date scalar recreation


## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

## Reproduction

1. navigate to http://localhost:3000/test
2. run this mutation 
 ```
 mutation {
  create(testInput: {dateField:"2020-06-23T00:13:29.317Z", stringField: ""})
}
```

3. View the logs and notice the date is coming in as a string.
4. Navigate to AppModule.
5. Swap the GraphQLFederationModule for the default GraphQLModule
6. Re run the mutation in step 2.
7. Date is coming in as a Date type as expected.

