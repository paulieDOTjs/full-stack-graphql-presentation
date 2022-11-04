import { ME_ID } from "../../config/ME_ID";
import { Resolvers } from "../../models/__generated__/graphql";
import { prisma } from "../../db/prisma";

export const userResolvers: Resolvers = {
  Query: {
    me: async () => {
      return prisma.user.findFirst({
        where: { username: "pauliedotjs" },
      });
    },
  },
  IUser: {
    __resolveType(user) {
      if (!user.id) return null;
      if (user.id === ME_ID) return "Me";
      return "User";
    },
  },
};
