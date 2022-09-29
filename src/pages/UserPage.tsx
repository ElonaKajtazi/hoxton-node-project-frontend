import { useState } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { LogIn } from "../components/LogIn";
import { Register } from "../components/Register";
import { Data } from "../types";
type Props = {
  signIn: (data: Data) => void;
};
export function UserPage({ signIn, error, setError}) {
  const [page, setPage] = useState(0);

  return (
    <>
      <Header />
      {page === 0 ? <LogIn signIn={signIn} setPage={setPage} error={error} setError={setError}/> : null}
      {page === 1 ? <Register signIn={signIn} error={error} setError={setError}/> : null}
      {/* <Footer /> */}
    </>
  );
}
