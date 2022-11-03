import { gql } from "@apollo/client";

export const HOME_PAGE_ME_PROPS = gql`
  fragment HomePageMeProps on Me {
    id
    firstName
    lastName
    myArticles {
      id
      title
    }
  }
`;

export const GET_HOME_PAGE_DATA = gql`
  ${HOME_PAGE_ME_PROPS}

  query GetHomePageData {
    me {
      ...HomePageMeProps
    }
  }
`;
