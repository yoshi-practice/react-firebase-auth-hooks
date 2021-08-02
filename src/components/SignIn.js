import { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../util/firebase";
import { useAuthContext } from '../context/AuthContext';

const SignIn = () => {
  const { user } = useAuthContext();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password);
  };

      const handleChangeEmail = (e) => {
    setEmail(e.currentTarget.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.currentTarget.value);
  };

  
  return(
    <div>
      <h2>Sign In {user && user.email}</h2>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="email" name="email" onChange={(e) => handleChangeEmail(e)}/>
        <label>Password</label>
        <input type="password" name="password" onChange={(e) => handleChangePassword(e)} />
        <button>Signin</button>
        <Link to={'/signup'}>
          Signup
        </Link>
        </form>
    </div>
  );
};

export default SignIn;