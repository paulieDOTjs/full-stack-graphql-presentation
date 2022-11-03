import { Resolvers } from "../../models/__generated__/graphql";
import { basicError, basicSuccess } from "../base/basicResponse";
import { prisma } from "../../db/prisma";

export const articleResolvers: Resolvers = {
  Me: {
    myArticles: (parent) =>
      prisma.article.findMany({ where: { authorId: parent.id } }),
  },
  Article: {
    author: async (parent) =>
      await prisma.user.findFirst({
        where: { id: parent.authorId },
      }),
  },
  Query: {
    article: (_, { id }) => prisma.article.findFirst({ where: { id } }),
  },
  Mutation: {
    updateArticle: (_, { articleInput }) =>
      prisma.article.update({
        where: { id: articleInput.articleID },
        data: {
          authorId: articleInput.myID,
          body: articleInput.articleBody,
          title: articleInput.articleTitle,
        },
      }),
    addArticle: (_, { articleInput }) =>
      prisma.article.create({
        data: {
          authorId: articleInput.myID,
          body: articleInput.articleBody,
          title: articleInput.articleTitle,
        },
      }),
    deleteArticle: async (_, { articleID }) => {
      try {
        const article = await prisma.article.delete({
          where: { id: articleID },
        });
        if (article) return basicSuccess;
        return {
          ...basicError,
          message:
            "Could not locate given article. Therefore, unable to delete.",
        };
      } catch {
        return {
          ...basicError,
          message: "An error occurred when trying to delete the article.",
        };
      }
    },
  },
};
