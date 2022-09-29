import Button from "@mui/material/Button/Button";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Category } from "../types";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

export function Categories (){
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
       <>
 <Header/>
 <div className="categories">
    {categories.map((category) => (
        <Link to={`/categories/${category.id}`}>
            <div className="category" key={category.id}>
               <Button size="large" variant="outlined" >{category.name}</Button>
            </div>
        </Link>
    ))}
 </div>
       </>
    )
}