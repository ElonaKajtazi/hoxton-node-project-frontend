import "../App.css";
import { User } from "../types";
import { NavBar } from "./NavBar";

type Props = {
  currentUser: null | User;
};
export function Header({ currentUser }: Props) {
  return (
    <header className="header">
      <NavBar currentUser={currentUser} />
    </header>
  );
}
