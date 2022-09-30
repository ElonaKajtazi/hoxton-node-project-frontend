import { Link } from "react-router-dom";
import { User } from "../types";

type Props = {
  currentUser: User | null;
};
export function BoughtBooks({ currentUser }: Props) {
  if (currentUser === null) return <h1>Loading</h1>;
  return (
    <div className="books">
      <h3 className="bought-books__title">Bought books:</h3>

      <div className="bought-books">
        {currentUser.boughtBooks.map((boughtBook) => (
          <Link to={`/books/${boughtBook.bookId}`}>
            <div className="bought-book__card" key={boughtBook.id}>
              <img
                className="bought-book__cover"
                src={boughtBook.book.image}
                alt=""
              />
              <h4 className="bought-book__title">{boughtBook.book.title}</h4>
              <span className="bought-book__author">
                {boughtBook.book.author.fullName}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
