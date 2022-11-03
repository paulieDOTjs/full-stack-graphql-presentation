import { gql } from "@apollo/client";

export const BASIC_RESPONSE = gql`
  fragment BasicResponse on BasicResponse {
    __typename
    ... on BasicSuccess {
      message
    }
    ... on BasicError {
      message
    }
  }
`;
