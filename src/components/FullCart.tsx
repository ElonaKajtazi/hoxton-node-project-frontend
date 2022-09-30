import { Button } from "@mui/material";
import { CartItem, User } from "../types";

type Props = {
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
  refreshPage: () => void;
  error: string[] | null;
  setError: React.Dispatch<React.SetStateAction<string[] | null>>;
  currentUser: User | null;
};

export function FullCart({
  cartItems,
  setCartItems,
  refreshPage,
  error,
  setError,
  currentUser,
}: Props) {
  let total = 0;
  for (let item of cartItems) {
    total += item.quantity * item.book.price;
  }
  if (!currentUser) return <h1>Loading..</h1>;
  return (
    <section className="basket-container">
      <h2> {currentUser.name}'s Cart</h2>
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

              <Button
                size="small"
                variant="text"
                color="error"
                onClick={() => {
                  fetch(`http://localhost:4444/cartitem/${cartItem.id}`, {
                    method: "DELETE",
                    headers: {
                      Authorization: localStorage.token,
                    },
                  })
                    .then((rsp) => rsp.json())
                    .then((data) => setCartItems(data));
                  refreshPage();
                }}
              >
                Remove
              </Button>
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
                if (data.errors) {
                  setError(data.errors);
                } else {
                  refreshPage();
                }
              });
          }}
        >
          Buy
        </Button>
      </div>
      {error ? <p className="error">{error}</p> : null}
    </section>
  );
}
