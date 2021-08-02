import './App.css';
import SignUp from './components/SignUp';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <AuthProvider>
    <div style={{margin: '2em'}}>
      <BrowserRouter>
        <Route path="/signup" component={SignUp} />
      </BrowserRouter>
    </div>
    </AuthProvider>
  );
}

export default App;
