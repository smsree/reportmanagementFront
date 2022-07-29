import React,{useState,useEffect} from "react";

import Authservice from "../services/Authservice";

function Profile(){
    const[current,setCurrent]=useState(undefined);

    useEffect(()=>{
        const LoginUser = Authservice.getCurrentUser();
        setCurrent(LoginUser)
    },[])
    return <div className="container">
    {current ?
    <div>
    <header className="jumbotron">
      <h3>
        User name: <strong>{current.username}</strong> 
      </h3>
    </header>
    
    <p>
      <strong>Id:</strong>{" "}
      {current.id}
    </p>
    <p>
      <strong>Email:</strong>{" "}
      {current.email}
    </p>
    <strong>Authorities:</strong>
    <ul>
      {current.roles &&
        current.roles.map((role, index) => <li key={index}>{role}</li>)}
    </ul>
  </div>: null}
  </div>
}
export default Profile;