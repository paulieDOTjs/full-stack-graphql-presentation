import { gql } from "apollo-server-core";

export const userSchema = gql`
  type Query {
    me: Me
  }

  interface IUser {
    id: ID!
    username: String!
    firstName: String
    lastName: String
    email: String
  }

  type Me implements IUser {
    id: ID!
    username: String!
    firstName: String
    lastName: String
    email: String
  }

  type User implements IUser {
    id: ID!
    # eslint-disable-next-line @graphql-eslint/no-typename-prefix
    username: String!
    firstName: String
    lastName: String
    email: String
  }
`;
