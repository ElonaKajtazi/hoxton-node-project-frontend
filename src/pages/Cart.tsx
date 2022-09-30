import "../styles/cart.css";
import { NavBar } from "../components/NavBar";
import { CartItem, User } from "../types";
import { useEffect, useState } from "react";
import { EmptyCart } from "../components/EmptyCart";
import { FullCart } from "../components/FullCart";
type Props = {
  currentUser: null | User;
  error: null | string[];
  setError: React.Dispatch<React.SetStateAction<string[] | null>>;
  refreshPage: () => void
};
export function Cart({ currentUser, error, setError, refreshPage}: Props) {
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
        <NavBar currentUser={currentUser} />
        <EmptyCart currentUser={currentUser} />
      </>
    );

  
  return (
    <>
      <NavBar currentUser={currentUser} />
      <FullCart
        currentUser={currentUser}
        setError={setError}
        cartItems={cartItems}
        refreshPage={refreshPage}
        setCartItems={setCartItems}
        error={error}
      />
    </>
  );
}
