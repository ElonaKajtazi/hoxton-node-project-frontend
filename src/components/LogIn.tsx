import { Button, TextField } from "@mui/material";
import { Data } from "../types";
import "../form.css";
import { Footer } from "./Footer";

type Props = {
  signIn: (data: Data) => void;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};
export function LogIn({ signIn, setPage }: Props) {
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
                alert(data.errors);
              } else {
                signIn(data);
              }
            });
        }}
      >
        <h2 className="form-title">Login Form</h2>
        <label>
          {/* Email: */}
          <input
            className="text-input"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
        </label>
        <label>
          {/* Password: */}
          <input
            className="text-input"
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </label>
        {/* <button> */}
        <Button variant="contained" size="small" type="submit">
          Login
        </Button>
        {/* </button> */}

        {/* <button>SIGN IN</button> */}
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

          {/* <Button color="secondary">Secondary</Button> */}
        </div>
      </form>
    </div>
  );
}
