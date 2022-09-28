export type Data = {
  user: User;
  token: string;
};

export type Book = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  inStock: number;
  categories: Category[];
  authorId: number;
  author: Author;
  cart: CartItem[];
  boughtBooks: BoughtBook[];
};

export type User = {
  id: number;
  name: String;
  email: String;
  password: String;
  balance: number;
  avatar: string;
  cart: CartItem[];
  boughtBooks: BoughtBook[];
};

export type CartItem = {
  id: number;
  user: User;
  book: Book;
  userId: number;
  bookId: number;
  quantity: number;
};

export type BoughtBook = {
  id: number;
  user: User;
  book: Book[];
  userId: number;
  bookId: number;
};

export type Author = {
  id: number;
  fullName: String;
  book: Book[];
  bookId: number;
};

export type Category = {
  id: number;
  name: String;
  books: Book[];
};
