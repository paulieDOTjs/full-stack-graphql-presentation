import { ApolloServer } from "apollo-server-express";
import { CURRENT_ENV, NODE_ENV } from "./config/NODE_ENV";
import { schema } from "./graphql/schema";

export const apollo = new ApolloServer({
  schema,
  debug: CURRENT_ENV === NODE_ENV.DEV,
  formatError: (err) => {
    if (
      err?.message?.startsWith("Database Error: ") &&
      CURRENT_ENV !== NODE_ENV.DEV
    ) {
      return new Error("Internal server error");
    }

    return err;
  },
});
