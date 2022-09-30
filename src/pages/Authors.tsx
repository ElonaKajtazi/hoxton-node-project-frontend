import "../App.css";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Author, User } from "../types";
import { Footer } from "../components/Footer";
type Props = {
  currentUser: User | null;
};
export function Authors({ currentUser }: Props) {
  const [authors, serAuthors] = useState<Author[]>([]);
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
          <Link to={`/authors/${author.fullName}`} key={author.id}>
            <div className="author" key={author.id}>
              <Button size="small" variant="contained">
                {author.fullName}
              </Button>
            </div>
          </Link>
        ))}
      </div>
      <div className="authors-books">
            
            </div>
      <Footer />
    </div>
  );
}
