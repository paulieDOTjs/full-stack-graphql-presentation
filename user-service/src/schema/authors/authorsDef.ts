import { gql } from "apollo-server-express";

export const authorDef = gql`
  type Author {
    id: Int!
    name: String!
    books: [Book]
  }

  type Query {
    authors(name: String): [Author]
  }
`;
