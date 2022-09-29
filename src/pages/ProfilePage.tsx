import { NavBar } from "../components/NavBar";
import { User } from "../types";
import "../styles/profile-page.css";
import { Button } from "@mui/material";
import { ProfileInfo } from "../components/ProfileInfo";
import { BoughtBooks } from "../components/BoughtBooks";

type Props = {
  currentUser: User | null;
  signOut: () => void;
};
export function ProfilePage({ currentUser, signOut }: Props) {
 
  return (
    <>
      <NavBar />
      <div className="profile-page">
        <ProfileInfo currentUser={currentUser} signOut={signOut} />
        <BoughtBooks currentUser={currentUser} />
      </div>
    </>
  );
}
