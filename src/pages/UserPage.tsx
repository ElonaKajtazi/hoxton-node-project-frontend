import { useState } from "react";
import { Header } from "../components/Header";
import { SignIn } from "../components/SignIn";
import { SignUp } from "../components/SingUp";
import { Data } from "../types";
type Props = {
  signIn: (data: Data) => void;
};
export function UserPage({ signIn }: Props) {
  const [page, setPage] = useState(0);
  return (
    <>
      <Header />
      {page === 0 ? <SignIn signIn={signIn} setPage={setPage} /> : null}
      {page === 1 ? <SignUp signIn={signIn} /> : null}
    </>
  );
}
