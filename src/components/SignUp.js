import { auth } from "../util/firebase";

const SignUp = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    auth.createUserWithEmailAndPassword(email.value, password.value);
  }

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Mail:
          <input
            type="email"
            name="email"
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default SignUp;