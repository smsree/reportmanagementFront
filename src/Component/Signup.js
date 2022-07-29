import {useRef} from "react";
import { useNavigate } from "react-router-dom";
import Authservice from "../services/Authservice";
function Signup(){

    const usernameInputRef = useRef();
    const passwordInputRef = useRef();
    const emailInputRef = useRef();

    const navigate = useNavigate();

    const handleSignup = event =>{
        event.preventDefault();
        const username = usernameInputRef.current.value;
        const email = emailInputRef.current.value;
        const password = passwordInputRef.current.value;

        Authservice.signup(username, email, password).then(()=>{
            navigate("/login");
            window.location.reload();
        },
        (error)=>{
            console.log(error);
        }
        )
    }


    return <div className="col-md-12">

      <form onSubmit={handleSignup}>
       
          <div>
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
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                ref={emailInputRef}
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
              <button className="btn btn-primary btn-block">Sign Up</button>
            </div>
          </div>
        
      </form>
    </div>
 
}
export default Signup;