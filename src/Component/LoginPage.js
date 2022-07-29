import React,{useRef} from "react";
import { useNavigate } from "react-router-dom";
import Authservice from "../services/Authservice";
function LoginPage(){

    const usernameInputRef= useRef();
    const passwordInputRef= useRef();

    

    const navigate = useNavigate();

    const handleLogin = event => {
        event.preventDefault();

        const usernameEntered = usernameInputRef.current.value;
        const passwordEntered = passwordInputRef.current.value;

        Authservice.login(usernameEntered,passwordEntered).then(()=>{
            navigate("/profile");
            console.log(Authservice.getCurrentUser());
            const k=Authservice.getCurrentUser();
            console.log(k.token);
            window.location.reload();

        },
        (error)=>{
            console.log(error);
        })
    }

    return <div className="col-md-12">
        <div className="card card-container">

          <form>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className="form-control"
                name="username"
                ref={usernameInputRef}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                ref={passwordInputRef}
              />
            </div>

            <div className="form-group">
              <button
                className="btn btn-primary btn-block"
                onClick={handleLogin}
              >
                <span>Login</span>
              </button>
            </div>
          </form>
        </div>
      </div>
}
export default LoginPage;