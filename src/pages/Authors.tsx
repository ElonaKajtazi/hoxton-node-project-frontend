import "../App.css";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { Author, Book, User } from "../types";
import { Footer } from "../components/Footer";
import { BookCover } from "../components/BookCover";
type Props = {
  currentUser: User | null;
};
export function Authors({ currentUser }: Props) {
  const [authors, serAuthors] = useState<Author[]>([]);
  const [authorBooks, setAuthorBooks] = useState<Book[]>([]);
  function getDatafromServer() {
    fetch("http://localhost:4444/authors")
      .then((resp) => resp.json())
      .then((data) => serAuthors(data));
  }

  useEffect(() => {
    getDatafromServer();
  }, []);
  return (
    <div className="authors-page">
      <Header currentUser={currentUser} />
      <div className="authors">
        {authors.map((author) => (
          <div
            className="author"
            key={author.id}
            onClick={() => {
              fetch(`http://localhost:4444/booksPerAuthor/${author.id}`)
                .then((rsp) => rsp.json())
                .then((data) => setAuthorBooks(data));
            }}
          >
            <Button size="small" variant="contained">
              {author.fullName}
            </Button>
          </div>
        ))}
      </div>
      <div className="authors-books">
        {authorBooks.map((book) => (
          <BookCover book={book} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
