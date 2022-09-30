import { Link } from "react-router-dom";

export function BookCover({ book }) {
  return (
    <Link to={`/books/${book.id}`} key={book.id}>
      <div className="singleBook" key={book.id}>
        <img className="book-img" src={book.image} />
        <h3 className="book-title">{book.title}</h3>
      </div>
    </Link>
  );
}
