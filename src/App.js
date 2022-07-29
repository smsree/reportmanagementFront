import { Routes,Route,Link } from 'react-router-dom';
import {useState, useEffect} from "react" ;
import './App.css';
import User from './Component/User';
import Admin from './Component/Admin';
import Operational from './Component/Operational';
import Audit from './Component/Audit';

import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from './Component/LoginPage';
import Signup from './Component/Signup';

import Profile from './Component/Profile';

import Authservice from './services/Authservice';

function App() {
  
  const[currentUser,setCurrentUser] = useState(undefined);

  useEffect(()=>{
    const LoginUser = Authservice.getCurrentUser();
    setCurrentUser(LoginUser)
  },[])
  function logOut(){
    Authservice.logout();
  }
  return <div>
  <nav className="navbar navbar-expand navbar-dark bg-dark">
    <Link to={"/home"} className="navbar-brand">
      Report management
    </Link>
    <div className="navbar-nav mr-auto">
      
        <li className="nav-item">
          <Link to={"/audit"} className="nav-link">
            Audit user
          </Link>
        </li>

    
        <li className="nav-item">
          <Link to={"/admin"} className="nav-link">
            Admin user
          </Link>
        </li>

       
        <li className="nav-item">
          <Link to={"/user"} className="nav-link">
            User
          </Link>
        </li>

        <li className="nav-item">
          <Link to={"/operational"} className="nav-link">
            operational user
          </Link>
        </li>

    </div>

    {currentUser ? (
      <div className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link to={"/profile"} className="nav-link">
            {currentUser.username}
          </Link>
        </li>
        <li className="nav-item">
          <a href="/login" className="nav-link" onClick={logOut}>
            LogOut
          </a>
        </li>
      </div>
    ) : (
      <div className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link to={"/login"} className="nav-link">
            Login
          </Link>
        </li>

        <li className="nav-item">
          <Link to={"/register"} className="nav-link">
            Sign Up
          </Link>
        </li>
        
      </div>
    )}
  </nav>

  <div className="container mt-3">
    <Routes>
      <Route excet path="/profile" element={<Profile/>}/>
      <Route exact path="/login" element={<LoginPage/>} />
      <Route exact path="/register" element={<Signup/>} />
      <Route path="/user" element={<User/>} />
      <Route path="/operational" element={<Operational/>} />
      <Route path="/admin" element={<Admin/>} />
      <Route path="/audit" element={<Audit/>}/>
    </Routes>
  </div>

 
</div>
  
}

export default App;
