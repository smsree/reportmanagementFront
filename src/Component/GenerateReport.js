import axios from "axios";
import { useEffect,useState } from "react";
import Authservice from "../services/Authservice";
function GenereteReport(){
    const[current,setCurrent]=useState(undefined);
    useEffect(()=>{
        const LoginUser = Authservice.getCurrentUser();
        setCurrent(LoginUser)
    },[])
    function generateHandler(event){
        event.preventDefault();
        const username = current.username
        const email = current.email
        axios.post("http://localhost:8100/files3/generateReport",{
            username,
            email,
        }).then((res)=>{
            alert(res.data);
        })
    }
    return <div>
        <button className="btn btn-primary" onClick={generateHandler}>Generate</button>
    </div>
}
export default GenereteReport;