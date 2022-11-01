import { gql } from "apollo-server-express";

export const bookDef = gql`
  type Book {
    id: Int!
    title: String!
    author: Author
  }

  extend type Query {
    books(searchTitle: String): [Book]
  }
`;
