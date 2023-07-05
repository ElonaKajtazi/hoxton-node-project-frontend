import "../styles/form.css";
import { Button } from "@mui/material";
import { Data } from "../types";
import { useState } from "react";
import { TogglePasswordVisibility } from "./TogglePassswordVisibility";

type Props = {
  signIn: (data: Data) => void;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setError: React.Dispatch<React.SetStateAction<string[] | null>>;
  togglePassword: boolean;
  setTogglePassword: React.Dispatch<React.SetStateAction<boolean>>;
  error: string[] | null;
};
export function LogIn({
  signIn,
  setPage,
  setError,
  error,
  togglePassword,
  setTogglePassword,
}: Props) {
  // const [togglePassword, setTogglePassword] = useState<boolean>(true);
  return (
    <div className="form-page">
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          fetch("http://localhost:4444/sign-in", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: e.target.email.value,
              password: e.target.password.value,
            }),
          })
            .then((rsp) => rsp.json())
            .then((data) => {
              if (data.errors) {
                setError(data.errors);
              } else {
                signIn(data);
              }
            });
        }}
      >
        <h2 className="form-title">Login Form</h2>
        <label>
          <input
            className="text-input"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
        </label>
        <label className="password-inputs">
          <input
            className="text-input password-input"
            type={togglePassword ? "password" : "text"}
            name="password"
            placeholder="Password"
            required
          />
          {/* <div className="password-checkbox-container">

          <input
          className="password-toggle-checkbox"
            type="checkbox"
            onClick={() => {
              if (togglePassword) {
                setTogglePassword(false);
              } else {
                setTogglePassword(true);
              }
            }}
          />
          <p>Show password</p>
          </div> */}
          <TogglePasswordVisibility
            togglePassword={togglePassword}
            setTogglePassword={setTogglePassword}
          />
        </label>
        <Button variant="contained" size="small" type="submit">
          Login
        </Button>
        {error ? <p className="error">{error}</p> : null}

        <div>
          <Button
            color="secondary"
            size="small"
            onClick={() => {
              setPage(1);
            }}
          >
            Create Account
          </Button>
        </div>
      </form>
    </div>
  );
}
