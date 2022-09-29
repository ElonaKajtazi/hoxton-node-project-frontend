import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Author } from "../types";
import "../App.css";
import { Footer } from "../components/Footer";

export function Authors (){
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
       <>
 <Header/>
 <div className="authors">
    {authors.map((author) => (
        <Link to={`/authors/${author.fullName}`} key={author.id}>
            <div className="category" key={author.id}>
               <Button size="large" variant="contained" >{author.fullName}</Button>
            </div>
        </Link>
    ))}
 </div>
 <Footer/>
       </>
    )
}