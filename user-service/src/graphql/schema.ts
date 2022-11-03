import { articleResolvers } from "./article/articleResolvers";
import { articleSchema } from "./article/articleSchema";
import { baseSchema } from "./base/base";
import { buildSubgraphSchema } from "@apollo/subgraph";
import { userResolvers } from "./user/meResolvers";
import { userSchema } from "./user/userSchema";

export const schema = buildSubgraphSchema([
  { typeDefs: baseSchema },
  { typeDefs: userSchema, resolvers: userResolvers },
  { typeDefs: articleSchema, resolvers: articleResolvers },
]);
