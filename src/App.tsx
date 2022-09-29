import {
  Navigate,
  Routes,
  Route,
  BrowserRouter as Router,
  useRoutes,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home";
import { Category } from "./pages/category";
import { SingleBook } from "./pages/singleBook";
import { PageNotFound } from "./pages/NotFound";
import { UserPage } from "./pages/UserPage";
import { useEffect, useState } from "react";
import { ProfilePage } from "./pages/ProfilePage";
import { Data, User } from "./types";

function App() {
  const [currentUser, setCurrentUser] = useState<null | User>(null);
  useEffect(() => {
    if (localStorage.token) {
      fetch("http://localhost:4444/validate", {
        headers: {
          Authorization: localStorage.token,
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          if (data.errors) {
            alert(data.errors);
          } else {
            signIn(data);
          }
        });
    }
  }, []);
  function signIn(data: Data) {
    setCurrentUser(data.user);
    localStorage.token = data.token;
  }

  function signOut() {
    setCurrentUser(null);
    localStorage.removeItem("token");
  }
  console.log(currentUser);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/books/:id" element={<SingleBook />} />
          <Route
            path="profile"
            element={
              currentUser ? (
                <ProfilePage currentUser={currentUser} signOut={signOut} />
              ) : (
                <UserPage signIn={signIn} />
              )
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
