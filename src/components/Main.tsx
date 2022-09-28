import { useEffect, useState } from "react";
import { Book } from "../types";
import "../App.css";

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
        <div className="singleBook" key={book.id}>
          <img className="book-img" src={book.image} />
          <h2 className="book-title">{book.title}</h2>
        </div>
      ))}
    </div>
  );
}
