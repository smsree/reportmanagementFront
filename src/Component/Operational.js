import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Authservice from "../services/Authservice";
import userservice from "../services/userservice";
import ListAllReport from "./ListAllReport";

function Operational(){
    const navigate = useNavigate();
    const [dataRes ,setData] = useState(undefined);
    useEffect(()=>{
        const resp = userservice.getOperationalBoard().then(res=>{
            setData(res);
        },error=>{
            console.log(error);
            if(error.response && error.response.status === 401 || error.response.status === 403){
                alert("please login as operational user");
                Authservice.logout();
                //window.location.reload();
                navigate("/login");
            }
        }
        
        )
    },[]) 
    return <div>
        {dataRes && <ListAllReport/>}
    </div>
}
export default Operational;