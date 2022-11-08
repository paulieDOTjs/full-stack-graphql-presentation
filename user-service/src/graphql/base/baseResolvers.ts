import { Resolvers } from "../../models/__generated__/graphql";
import { basicSuccess } from "./basicResponse";

export const userResolvers: Resolvers = {
  Query: {
    test: () => basicSuccess,
  },
  Mutation: {
    test: (_, { message }) => ({ ...basicSuccess, message }),
  },
};
