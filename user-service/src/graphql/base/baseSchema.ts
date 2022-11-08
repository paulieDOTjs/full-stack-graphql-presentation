import { gql } from "apollo-server-core";

export const baseSchema = gql`
  scalar DateTime

  type Query {
    test: BasicResponse
  }

  type Mutation {
    test(message: String!): BasicResponse
  }

  union BasicResponse = BasicSuccess | BasicError

  # eslint-disable-next-line @graphql-eslint/strict-id-in-types
  type BasicSuccess {
    message: String!
  }

  # eslint-disable-next-line @graphql-eslint/strict-id-in-types
  type BasicError {
    message: String!
  }
`;
