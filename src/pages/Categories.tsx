import Button from "@mui/material/Button/Button";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Category, User } from "../types";
import { Footer } from "../components/Footer";
export type Props = {
  currentUser: User | null;
};

export function Categories({ currentUser }: Props) {
  const [categories, setCategories] = useState<Category[]>([]);
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
          <Link to={`/categories/${category.id}`}>
            <div className="category" key={category.id}>
              <Button size="small" variant="contained">
                {category.name}
              </Button>
            </div>
          </Link>
        ))}
    
      </div>
      <div className="categories-books">
            
            </div>
      <Footer />
    </div>
  );
}
