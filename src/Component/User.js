import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Authservice from "../services/Authservice";
import userservice from "../services/userservice"
import UserUploadFiles from "./UserUploadFiles";
function User(){
    const navigate = useNavigate();
    const [dataRes ,setData] = useState(undefined);
    useEffect(()=>{
        const resp = userservice.getUserBoard().then(res=>{
            setData(res);
        },error=>{
            console.log(error);
            if(error.response && error.response.status === 401 ){
                alert("please login as any one of user role");
                Authservice.logout();
                navigate("/login");
            }
        }
        
        )
    },[]) 
    return <div>{dataRes ? <h1>{dataRes.data}</h1> : <h1>Only registered users are allowed</h1>}
        {dataRes && <div><h4>User can upload file:</h4><UserUploadFiles/></div>}
    </div>
}
export default User;