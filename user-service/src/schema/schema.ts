import { authorDef } from "./authors/authorsDef";
import { authorsResolve } from "./authors/authorsResolve";
import { bookDef } from "./books/bookDef";
import { booksResolve } from "./books/booksResolve";
import { buildSubgraphSchema } from "@apollo/subgraph";

export const schema = buildSubgraphSchema([
  { typeDefs: bookDef, resolvers: booksResolve },
  { typeDefs: authorDef, resolvers: authorsResolve },
]);
