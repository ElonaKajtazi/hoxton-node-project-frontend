import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { Book } from "../types";

export function SingleBook() {
  const [singleBook, setSingleBook] = useState<null | Book>(null);
  const params = useParams();
  useEffect(() => {
    fetch(`http://localhost:4444/books/${params.id}`)
      .then((rsp) => rsp.json())
      .then((singleBookFromServer) => setSingleBook(singleBookFromServer));
  }, []);

  if(singleBook === null) return <h1>Loadingg</h1>
  return (
    <>
      <NavBar />
      <h1>{singleBook.title}</h1>
    </>
  );
}
