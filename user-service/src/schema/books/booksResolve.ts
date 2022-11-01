import { Resolvers } from "../../models/__generated__/graphql";
import { authors, books } from "../../models/booksDB";

export const booksResolve: Omit<Resolvers, "_Service"> = {
  Query: {
    books: (_, args) => {
      return books.filter((book) => {
        return args.searchTitle ? book.title.includes(args.searchTitle) : books;
      });
    },
  },
  Book: {
    author: (book) =>
      authors.find((auth) => auth.authorId === book.authorId) || null,
  },
};
