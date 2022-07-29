import axois from "axios";

const API_URL = "http://localhost:8100/api/auth/";

const login = (username, password) =>{
    return axois.post(API_URL+"signin",
    {
        username,
        password,
    }).then(response=>{
        
        if(response.data){
            localStorage.setItem("user",JSON.stringify(response.data))
        }
        return response.data;
    });

};

const signup = (username,email,password)=>{
    return axois.post(API_URL+"signup",{
        username,
        email,
        password,
    });
};

const logout=()=>{
    localStorage.removeItem("user");
}

const getCurrentUser = () =>{
    return JSON.parse(localStorage.getItem('user'));
}

const Authservice ={
    login,
    logout,
    signup,
    getCurrentUser
}

export default Authservice;