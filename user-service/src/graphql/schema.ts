import { baseSchema } from "./base/baseSchema";
import { buildSubgraphSchema } from "@apollo/subgraph";
import { userResolvers } from "./user/userResolvers";
import { userSchema } from "./user/userSchema";

export const schema = buildSubgraphSchema([
  { typeDefs: baseSchema },
  { typeDefs: userSchema, resolvers: userResolvers },
]);
