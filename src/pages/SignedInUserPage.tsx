import { User } from "../types";

type Props = {
  currentUser: User | null;
  signOut: () => void;
};
export function SignedInUserPage({ currentUser, signOut }: Props) {
  if (currentUser === null) return <h1>Loading</h1>;
  return (
    <>
      <h1>Welocome {currentUser.name} </h1>
      <button
        onClick={() => {
          signOut();
        }}
      >
        Sign Out
      </button>
    </>
  );
}
