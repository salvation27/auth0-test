import './App.css';
import Login from './components/Login';
import Logout from './components/Logout';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div className="App">
      <Login />
      <Logout />
      <UserProfile />
    </div>
  )
}

export default App;
