import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Authservice from "../services/Authservice";
import userservice from "../services/userservice";
import GenerateReport from "./GenerateReport";
import UploadFiles from "./UploadFiles";
function Audit(){
    const navigate = useNavigate();
    const [dataRes ,setData] = useState(undefined);
    useEffect(()=>{
        const resp = userservice.getAuditBoard().then(res=>{
            setData(res);
        },error=>{
            console.log(error);
            if(error.response && error.response.status === 401 || error.response.status === 403){
                alert("please login as audit user");
                Authservice.logout();
                navigate("/login");
            }
        }
        
        )
    },[]) 
    return <div>
        {dataRes && <div className="container" style={{ width: "600px" }}>
      <div className="my-3">
        <h4>File Upload</h4>
      </div> <UploadFiles/> 
      <div> <GenerateReport/></div>
      </div>
      }
    </div>
}
export default Audit;