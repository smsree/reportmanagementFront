import axios from "axios";
import authHeader from "./authHeader";

const API_URL = "http://localhost:8100/api/test";

const getPublicContent=()=>{
    return axios.get(API_URL+"/all");
}

const getUserBoard = () => {
    return axios.get(API_URL+"/user",{headers : authHeader()})
}

const getAuditBoard = () => {
    return axios.get(API_URL+"/audit",{headers : authHeader()})
}

const getAdminBoard = () => {
    return axios.get(API_URL+"/admin",{headers:authHeader()})
}

const getOperationalBoard = () => {
    return axios.get(API_URL+"/operational",{headers:authHeader()})
}

const getAllUser = () =>{
    return axios.get(API_URL+'/showAllUser',{headers:authHeader()})
}


const userservice ={
    getAdminBoard,
    getPublicContent,
    getUserBoard,
    getAuditBoard,
    getOperationalBoard,
    getAllUser,
}

export default userservice;