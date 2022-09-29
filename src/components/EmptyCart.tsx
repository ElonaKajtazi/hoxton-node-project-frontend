import { Button } from "@mui/material";

export function EmptyCart() {
  return (
    <section className="basket-container">
      <h2>Your Cart</h2>
      <ul>
        <article className="basket-container__item">
          Your cart is empty!
        </article>
      </ul>
      <div className="buy">
        <h3>Your total: {0} €</h3>
        <Button variant="contained" color="success" className="btn">
          Buy
        </Button>
      </div>
    </section>
  );
}
