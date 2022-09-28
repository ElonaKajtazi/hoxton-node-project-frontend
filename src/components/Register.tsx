import { Data } from "../types";
import "../form.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

type Props = {
  signIn: (data: Data) => void;
};
export function Register({ signIn }: Props) {
  return (

    <div className="form-page">
     
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          fetch("http://localhost:4444/sign-up", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: e.target.name.value,
              email: e.target.email.value,
              password: e.target.password.value,
            }),
          })
            .then((resp) => resp.json())
            .then((data) => {
              if (data.errors) {
                console.log(data.errors);
                alert(data.errors);
              } else {
                signIn(data);
                console.log(data);
              }
            });
        }}
      >
        <h2 className="form-title">Sign up</h2>
        <label>
          <input
            className="text-input"
            type="name"
            name="name"
            required
            placeholder="Name"
          />
        </label>
        <label>
          <input
            className="text-input"
            type="email"
            name="email"
            required
            placeholder="Email"
          />
        </label>
        <label>
          <input
            className="text-input"
            type="password"
            name="password"
            required
            placeholder="Password"
          />
        </label>

        <Button variant="contained" size="small" type="submit">
          Register
        </Button>
      </form>
    </div>
  );
}
