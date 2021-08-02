import Home from './components/Home';
import SignUp from './components/SignUp';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter, Route } from 'react-router-dom';
import SignIn from './components/SignIn';

function App() {
  return (
    <AuthProvider>
    <div style={{margin: '2em'}}>
      <BrowserRouter>
        <Route exact path="/" component={Home}/>
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
      </BrowserRouter>
    </div>
    </AuthProvider>
  );
}

export default App;
