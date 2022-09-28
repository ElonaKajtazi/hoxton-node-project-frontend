import { NavBar } from "../components/NavBar";
import { User } from "../types";
import "../profile-page.css";
import { Footer } from "../components/Footer";

type Props = {
  currentUser: User | null;
  signOut: () => void;
};
export function SignedInUserPage({ currentUser, signOut }: Props) {
  if (currentUser === null) return <h1>Loading</h1>;
   return (
    <>
      <NavBar />
      <div className="profile-page">
        <img className="avatar" src={currentUser.avatar} alt="avatar" />
        <div className="info">
          <div className="user-info">
            <h2>Name:</h2>
            <span>{currentUser.name}</span>
          </div>
          <div className="user-info">
            <h2>Email:</h2>
            <span>{currentUser.email}</span>
          </div>
          <div className="user-info">
            <h2>Current balance:</h2>
            <span>{currentUser.balance} €</span>
          </div>
        </div>
        <button className="logOut-button"
        onClick={() => {
          signOut();
        }}
      >
        Log Out
      </button>
      </div>
      <div>
        <ul>
          {currentUser.boughtBooks.map((boughtBook) => (
            <li>{boughtBook.id}</li>
          ))}
        </ul>
      </div>
      {/* <Footer /> */}
    </>
  );
}
