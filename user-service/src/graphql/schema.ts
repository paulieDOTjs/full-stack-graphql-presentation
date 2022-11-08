import { addressResolvers } from "./address/addressResolvers";
import { addressSchema } from "./address/addressSchema";
import { baseSchema } from "./base/baseSchema";
import { buildSubgraphSchema } from "@apollo/subgraph";
import { orderResolvers } from "./order/orderResolvers";
import { orderSchema } from "./order/orderSchema";
import { userResolvers } from "./user/userResolvers";
import { userSchema } from "./user/userSchema";

export const schema = buildSubgraphSchema([
  { typeDefs: baseSchema },
  { typeDefs: userSchema, resolvers: userResolvers },
  { typeDefs: orderSchema, resolvers: orderResolvers },
  { typeDefs: addressSchema, resolvers: addressResolvers },
]);
