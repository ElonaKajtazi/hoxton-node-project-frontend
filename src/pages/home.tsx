import { Header } from "../components/Header";
import { Main } from "../components/Main";
import "../App.css";
import { Footer } from "../components/Footer";
import { User } from "../types";
export type Props = {
  currentUser: User | null;
};
export function Home({ currentUser }: Props) {
  return (
    <div className="home">
      <Header currentUser={currentUser} />
      <Main />
      <Footer />
    </div>
  );
}
