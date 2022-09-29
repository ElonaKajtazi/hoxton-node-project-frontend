import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { Book, CartItem } from "../types";
import "../styles/single-book.css";
import { Button } from "@mui/material";

export function SingleBook() {
  const [singleBook, setSingleBook] = useState<null | Book>(null);
  const params = useParams();
  const [cartItem, setCartItem] = useState<CartItem | null>(null);
  const [quantity, setQuantity] = useState<Number>(1);
  useEffect(() => {
    fetch(`http://localhost:4444/books/${params.id}`)
      .then((rsp) => rsp.json())
      .then((singleBookFromServer) => setSingleBook(singleBookFromServer));
  }, []);

  if (singleBook === null) return <h1>Loadingg</h1>;
  //   const shortDescription= `${text.slice(0,25) ... }`
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <NavBar />
      <div className="single-book">
        <section className="single-book__details">
          <img
            className="single-book__image"
            src={singleBook.image}
            alt={singleBook.title}
          />
          <div className="single-book-detail__side">
            <h2 className="single-book__title">{singleBook.title}</h2>
            <h3 className="single-book__author">
              {singleBook.author.fullName}
            </h3>
            <h4>Summary</h4>
            <p className="single-book__summary">{`${singleBook.description.slice(
              0,
              450
            )}...`}</p>
            <h5 className="in-tock">In stock : {singleBook.inStock}</h5>
            <h5 className="price">Price: {singleBook.price}€</h5>
            <label htmlFor="quantity">
              Chose quantity:
            <select
              name="quantity"
              onChange={(e) => {
                setQuantity(Number(e.target.value));
                console.log(quantity);
              }}
            >
              {numbers.map((number) => (
                <option value={number}>{number}</option>
              ))}
            </select>
            </label>

            <Button
              color="secondary"
              variant="contained"
              size="small"
              className="add-to-cart-btn"
              onClick={() => {
                fetch(`http://localhost:4444/cartItem`, {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: localStorage.token,
                  },
                  body: JSON.stringify({
                    bookId: singleBook.id,
                    quantity: quantity,
                  }),
                })
                  .then((rsp) => rsp.json())
                  .then((newCartItem) => console.log(newCartItem));
              }}
            >
              Add to cart
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}
