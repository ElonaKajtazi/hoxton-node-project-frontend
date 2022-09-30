import { useEffect, useState } from "react";
import { Book } from "../types";
import "../App.css";
import { BookCover } from "./BookCover";

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
        <BookCover book={book} />
      ))}
    </div>
  );
}
