import { Header } from "../components/Header";

export function SignUp() {
  return (
    <div>
      <Header />

      <h1>Create an account</h1>
      <form>
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
          <input type="email" name="email" required />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
