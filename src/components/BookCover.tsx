import { Link } from "react-router-dom";
import { Book } from "../types";
type Props = {
  book: Book;
};

export function BookCover({ book }: Props) {
  return (
    <Link to={`/books/${book.id}`} key={book.id}>
      <div className="singleBook" key={book.id}>
        <div className="book">
        <img className="book-img" src={book.image} />
        <h3 className="book-title">{`${book.title.slice(0,20)}`}</h3>
        </div>
      </div>
    </Link>
  );
}
