import { useState } from "react";


export function SignUp() {
  const [currentUser, setCurrentUser] = useState(null);
  function signIn(data) {
    setCurrentUser(data.user);
    localStorage.token = data.token;
  }

  function signOut() {
    setCurrentUser(null);
    localStorage.removeItem("token");
  }
  return (
    <form
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
              // data = { user, token }
              signIn(data);
              console.log(data);
            }
          });
      }}
    >
      <h2>Sign up</h2>
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
      <button>SIGN UP</button>
    </form>
  );
}
