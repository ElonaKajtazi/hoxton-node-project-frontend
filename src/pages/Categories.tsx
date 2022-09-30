import Button from "@mui/material/Button/Button";
import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Book, Category, User } from "../types";
import { Footer } from "../components/Footer";
import { BookCover } from "../components/BookCover";
import "../App.css";
export type Props = {
  currentUser: User | null;
};

export function Categories({ currentUser }: Props) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [categoryBooks, setCategoryBooks] = useState<Book[]>([]);
  function getDatafromServer() {
    fetch("http://localhost:4444/categories/")
      .then((resp) => resp.json())
      .then((data) => setCategories(data));
  }

  useEffect(() => {
    getDatafromServer();
  }, []);
  return (
    <div className="categories-page">
      <Header currentUser={currentUser} />
      <div className="categories">
        {categories.map((category) => (
          // <Link to={`/categories/${category.id}`}>
          <div
            className="category"
            key={category.id}
            onClick={() => {
              fetch(`http://localhost:4444/booksPerCategory/${category.id}`)
                .then((rsp) => rsp.json())
                .then((data) => setCategoryBooks(data));
            }}
          >
            <Button size="small" variant="contained">
              {category.name}
            </Button>
          </div>
          // </Link>
        ))}
      </div>
      <div className="categories-books">
        {categoryBooks.map((book) => (
          <BookCover book={book} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
