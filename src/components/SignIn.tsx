export function SignIn({ signIn }) {
  return (
    <form
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
      <h2>Sign in</h2>
      <label>
        Email:
        <input type="email" name="email" required />
      </label>
      <label>
        Password:
        <input type="password" name="password" required />
      </label>
      <button>SIGN IN</button>
    </form>
  );
}
