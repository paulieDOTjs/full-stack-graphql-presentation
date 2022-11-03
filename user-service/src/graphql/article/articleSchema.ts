import { gql } from "apollo-server-core";

export const articleSchema = gql`
  type Mutation {
    addArticle(articleInput: ArticleAddInput!): Article
    updateArticle(articleInput: ArticleUpdateInput!): Article
    deleteArticle(articleID: ID!): BasicResponse
  }

  extend type Query {
    article(id: ID!): Article
  }

  input ArticleAddInput {
    myID: String!
    articleTitle: String!
    articleBody: String!
  }

  input ArticleUpdateInput {
    myID: String!
    articleID: String!
    articleTitle: String!
    articleBody: String!
  }

  extend type Me {
    myArticles: [Article!]
  }

  type Article {
    id: ID!
    title: String!
    body: String!
    author: IUser
  }
`;
