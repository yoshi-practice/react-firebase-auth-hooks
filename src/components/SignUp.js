import { auth } from "../util/firebase";
import { useState } from 'react';
import { useAuthContext } from '../context/AuthContext';

const SignUp = () => {
  const { user } = useAuthContext();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    auth.createUserWithEmailAndPassword(email, password);
  }

    const handleChangeEmail = (e) => {
    setEmail(e.currentTarget.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.currentTarget.value);
  };

  return (
    <div>
      <h1>Sign Up {user.email}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Mail:
          <input
            type="email"
            name="email"
            placeholder="email"
            onChange={(e) => handleChangeEmail(e)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={(e) => handleChangePassword(e)}
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default SignUp;