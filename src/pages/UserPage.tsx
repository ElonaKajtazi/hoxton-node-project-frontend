import { useState } from "react";
import { Header } from "../components/Header";
export function UserPage() {

  return (
    <div>
      <Header />

      <h1>Create an account</h1>
      {/* <form
        onSubmit={(e) => {
          e.preventDefault();
          fetch("http://localhost:4444/sign-up", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: e.target.name.value,
              email: e.target.email.valye,
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
        <label>
          Name:
          <input type="name" name="name" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Password:
          <input type="password" name="password" required />
        </label>
        <button>Submit</button>
      </form> */}
   
    </div>
  );
}
