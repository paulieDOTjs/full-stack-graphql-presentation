import { gql } from "apollo-server-core";

export const baseSchema = gql`
  union BasicResponse = BasicSuccess | BasicError

  type BasicSuccess {
    message: String!
  }

  type BasicError {
    message: String!
  }
`;
