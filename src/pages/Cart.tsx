import { NavBar } from "../components/NavBar";
import { CartItem, User } from "../types";
import "../styles/cart.css";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
type Props = {
  currentUser: null | User;
};
export function Cart({ currentUser, error, setError }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    fetch("http://localhost:4444/cartitems", {
      headers: {
        Authorization: localStorage.token,
      },
    })
      .then((rsp) => rsp.json())
      .then((data) => setCartItems(data));
  }, []);
  if (cartItems.length === 0)
    return (
      <>
        <NavBar />
        <section className="basket-container">
          <h2>Your Cart</h2>
          <ul>
            <article className="basket-container__item">
              Your cart is empty!
            </article>
          </ul>
          <div className="buy">
            <h3>Your total: {0} €</h3>
            <Button
              variant="contained"
              color="success"
              className="btn"
              onClick={() => {
                fetch("http://localhost:4444/buy", {
                  method: "POST",
                  headers: {
                    Authorization: localStorage.token,
                  },
                  body: JSON.stringify({}),
                })
                  .then((rsp) => rsp.json())
                  .then((data) => {
                    if (data.errors) setError(data.errors);
                  });
              }}
            >
              Buy
            </Button>
          </div>
          {error ? <p className="error">{error}</p> : null}
        </section>
      </>
    );
  let total = 0;
  for (let item of cartItems) {
    total += item.quantity * item.book.price;
  }
  return (
    <>
      <NavBar />
      <section className="basket-container">
        <h2>Your Cart</h2>
        <ul>
          {cartItems.map((cartItem) => (
            <li key={cartItem.id}>
              <article className="basket-container__item">
                <img
                  className="cart-image"
                  src={cartItem.book.image}
                  alt={cartItem.book.title}
                />
                <div className="book-info">
                  <p>{cartItem.book.title}</p>
                  <p>{cartItem.book.author.fullName}</p>
                  <p>Qty: {cartItem.quantity}</p>
                  <p>Price: {cartItem.book.price} €</p>
                </div>
                <p
                  onClick={() => {
                    fetch(`http://localhost:4444/cartitem/${cartItem.id}`, {
                      method: "DELETE",
                      headers: {
                        Authorization: localStorage.token,
                      },
                    })
                      .then((rsp) => rsp.json())
                      .then((data) => setCartItems(data));
                  }}
                >
                  🗑️
                </p>
              </article>
            </li>
          ))}
        </ul>
        <div className="buy">
          <h3>Your total: {total} €</h3>
          <Button
            variant="contained"
            color="success"
            className="btn"
            onClick={() => {
              fetch("http://localhost:4444/buy", {
                method: "POST",
                headers: {
                  Authorization: localStorage.token,
                },
                body: JSON.stringify({}),
              })
                .then((rsp) => rsp.json())
                .then((data) => {
                  if (data.errors) setError(data.errors);
                });
            }}
          >
            Buy
          </Button>
        </div>
        {error ? <p className="error">{error}</p> : null}
      </section>
    </>
  );
}
