import { useState } from "react";
import { Header } from "../components/Header";
import { LogIn } from "../components/LogIn";
import { Register } from "../components/Register";
import { Data, User } from "../types";
type Props = {
  signIn: (data: Data) => void;
  error: string[] | null;
  setError: React.Dispatch<React.SetStateAction<string[] | null>>;
  currentUser: User | null;
};
export function UserPage({ signIn, error, setError, currentUser }: Props) {
  const [page, setPage] = useState(0);

  return (
    <>
      <Header currentUser={currentUser} />
      {page === 0 ? (
        <LogIn
          signIn={signIn}
          setPage={setPage}
          error={error}
          setError={setError}
        />
      ) : null}
      {page === 1 ? (
        <Register signIn={signIn} error={error} setError={setError} />
      ) : null}
    </>
  );
}
