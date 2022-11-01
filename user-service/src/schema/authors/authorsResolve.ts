import { Resolvers } from "../../models/__generated__/graphql";
import { authors, books } from "../../models/booksDB";

export const authorsResolve: Omit<Resolvers, "_Service"> = {
  Query: {
    authors: (_, args) => {
      return authors.filter((auth) => {
        return args.name ? auth.name.includes(args.name) : authors;
      });
    },
  },

  Author: {
    id: (author) => author.authorId,
    books: (author) =>
      books.filter((book) => book.authorId === author.authorId),
  },
};
