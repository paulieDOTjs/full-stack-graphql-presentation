export const books = [
  { title: "Assassin's Apprentice", authorId: 1 },
  { title: "Assassin's Quest", authorId: 1 },
  { title: "Royal Assassin", authorId: 1 },
  { title: "The Fellowship of the Rings", authorId: 2 },
  { title: "The Two Towers", authorId: 2 },
  { title: "The Return of the King", authorId: 2 },
].map((book, i) => ({ ...book, id: i }));

export const authors = [
  { authorId: 1, name: "Robin Hobb" },
  { authorId: 2, name: "J.R.R. Tolkien" },
];
