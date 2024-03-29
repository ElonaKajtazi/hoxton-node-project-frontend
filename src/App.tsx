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
import { Categories } from "./pages/Categories";
import { SingleBook } from "./pages/singleBook";
import { PageNotFound } from "./pages/NotFound";
import { UserPage } from "./pages/UserPage";
import { useEffect, useState } from "react";
import { ProfilePage } from "./pages/ProfilePage";
import { Data, User } from "./types";
import { Cart } from "./pages/Cart";
import { Authors } from "./pages/Authors";

function App() {
  const [currentUser, setCurrentUser] = useState<null | User>(null);
  const [error, setError] = useState<null | Array<string>>(null);
  const [togglePassword, setTogglePassword] = useState<boolean>(true);

  const refreshPage = () => {
    window.location.reload();
  };

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
            setError(data.errors);
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
          <Route path="/home" element={<Home currentUser={currentUser} />} />
          <Route
            path="/categories"
            element={<Categories currentUser={currentUser} />}
          />
          <Route
            path="/authors"
            element={<Authors currentUser={currentUser} />}
          />
          <Route
            path="/books/:id"
            element={
              <SingleBook
                refreshPage={refreshPage}
                setError={setError}
                error={error}
                currentUser={currentUser}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                refreshPage={refreshPage}
                currentUser={currentUser}
                setError={setError}
                error={error}
              />
            }
          />
          <Route
            path="/books/:id"
            element={
              <SingleBook
                refreshPage={refreshPage}
                error={error}
                setError={setError}
                currentUser={currentUser}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                refreshPage={refreshPage}
                currentUser={currentUser}
                error={error}
                setError={setError}
              />
            }
          />

          <Route
            path="profile"
            element={
              currentUser ? (
                <ProfilePage currentUser={currentUser} signOut={signOut} />
              ) : (
                <UserPage
                  signIn={signIn}
                  error={error}
                  setError={setError}
                  currentUser={currentUser}
                  togglePassword={togglePassword}
                  setTogglePassword={setTogglePassword}
                />
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
