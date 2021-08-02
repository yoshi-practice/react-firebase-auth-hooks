import { useHistory } from "react-router-dom";
import { auth } from "../util/firebase";

const Home = () => {
  const history = useHistory();
  const handleLogout = () => {
    auth.signOut();
    history.push("/signin");
  };
  return (
    <div className="home">
      <h1>Home</h1>
      <p>
        <a href="/signin">Signin</a>
        <a href="/signup">Signup</a>
      </p>
      <p>
        <button onClick={handleLogout}>Logout</button>
      </p>
    </div>
  );
};

export default Home;