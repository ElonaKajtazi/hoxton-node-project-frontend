import { useEffect, useState } from "react";
import { Book } from "../types";
import "../App.css";
import { Link } from "react-router-dom";

export function Main() {
  const [books, setBooks] = useState<Book[]>([]);
  function getDatafromServer() {
    fetch("http://localhost:4444/books")
      .then((resp) => resp.json())
      .then((data) => setBooks(data));
  }

  useEffect(() => {
    getDatafromServer();
  }, []);
  return (
    <div className="home-main">
      {books.map((book) => (
        <Link to={`/books/${book.id}`} key={book.id}>
          <div className="singleBook" key={book.id}>
            <img className="book-img" src={book.image} />
            <h3 className="book-title">{book.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}
