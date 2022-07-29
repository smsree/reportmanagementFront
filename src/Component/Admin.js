import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import authHeader from "../services/authHeader";
import Authservice from "../services/Authservice";
import userservice from "../services/userservice";
import UserDetails from "./UserDetails";

function Admin(){
    const navigate = useNavigate();
    const [dataRes ,setData] = useState(undefined);
    const [user,setUser] = useState([]);
    useEffect(()=>{
        const resp = userservice.getAdminBoard().then(res=>{
            setData(res);
        },error=>{
            console.log(error);
            if(error.response && (error.response.status === 401 || error.response.status === 403)){
                alert("please login as admin user");
                Authservice.logout();
                navigate("/login");
            }
        }
        
        )
    },[]) 
    
        useEffect(()=>{
            const fetchUser=async()=>{
                const response = await fetch("http://localhost:8100/api/test/showAllUser",{headers:authHeader()});
                const responseData = await response.json();
                console.log(responseData);
                setUser(responseData);
            };
            fetchUser();
        },[])
         const userData=user.map(u=><UserDetails  key={u.id} name={u.username} email={u.email} />);
        // console.log(user.map(user.username));

        
    
    return <div>{dataRes ? <h1>{dataRes.data}</h1> : <h1>Only admin user allowed</h1>}
    {dataRes && userData}
    </div>
}
export default Admin;