import { ME_ID } from "../../config/ME_ID";
import { Resolvers } from "../../models/__generated__/graphql";
import { basicSuccess } from "./basicResponse";

export const userResolvers: Resolvers = {
  Query: {
    test: () => basicSuccess,
  },
  Mutation: {
    test: (_, { message }) => ({ ...basicSuccess, message }),
  },
  IUser: {
    __resolveType(user) {
      if (!user.id) return null;
      if (user.id === ME_ID) return "Me";
      return "User";
    },
  },
};
