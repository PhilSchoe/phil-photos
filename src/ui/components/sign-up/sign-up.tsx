import { signup } from "./signUpAction";

export default function SignUp() {
  return (
    <>
      <h1>Create an Account</h1>
      <form action={signup}>
        <label htmlFor="username">Username</label>
        <input name="username" id="username"></input>
        <br />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password"></input>
        <br />
        <button>Continue</button>
      </form>
    </>
  );
}

interface ActionResult {
  error: string;
}
