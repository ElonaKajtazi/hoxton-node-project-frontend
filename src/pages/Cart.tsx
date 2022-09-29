import { NavBar } from "../components/NavBar";
import { User } from "../types";
import "../styles/cart.css";
type Props = {
  currentUser: null | User;
};
export function Cart({ currentUser }: Props) {
  if (!currentUser) return <h1>Loading</h1>;
  let total = 0;
  for (let item of currentUser.cart) {
    total += item.quantity * item.book.price;
  }
  return (
    <>
      <NavBar />
      <section className="basket-container">
        <h2>Your Cart</h2>
        <ul>
          {currentUser.cart.map((cartItem) => (
            <li>
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
                <p></p>
              </article>
            </li>
          ))}
        </ul>
        <h3>Your total: {total} €</h3>
        <button
          onClick={() => {
            fetch("http://localhost:4444/buy", {
              method: "POST",
              headers: {
                Authorization: localStorage.token,
              },
              body: JSON.stringify({}),
            })
              .then((rsp) => rsp.json())
              .then((data) => console.log(data));
          }}
        >
          Buy
        </button>
      </section>
    </>
  );
}