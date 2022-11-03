import { gql } from "@apollo/client";

export const ARTICLE_PAGE_PROPS = gql`
  fragment ArticlePageProps on Article {
    id
    title
    body
  }
`;

export const GET_ARTICLE_DATA = gql`
  ${ARTICLE_PAGE_PROPS}
  query GetArticleData($id: ID!) {
    article(id: $id) {
      ...ArticlePageProps
    }
  }
`;
