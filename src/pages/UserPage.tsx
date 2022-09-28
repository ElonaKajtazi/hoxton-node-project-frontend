import { useState } from "react";
import { Header } from "../components/Header";
import { SignIn } from "../components/SignIn";
import { SignUp } from "../components/SingUp";
export function UserPage({ signIn }) {
  const [page, setPage] = useState(0);
  return (
    <>
      <Header />
      {page === 0 ? <SignIn signIn={signIn} setPage={setPage} /> : null}
      {page === 1 ? <SignUp  signIn={signIn}/> : null}

    </>
  );
}
