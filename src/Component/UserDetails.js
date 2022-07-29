
import axios from "axios";
import React,{useRef} from "react";
import authHeader from "../services/authHeader";
function UserDetails(props){

    //const roles = props.role[0];
    const roleInputRef= useRef();

    const updateHandler=(event)=>{
        event.preventDefault();
        var input_role=[];
        const newRole=roleInputRef.current.value;
        input_role.push(newRole);
        axios.put("http://localhost:8100/api/test/updateOtherUserRole",{
            username: props.name,
            roles:input_role,
        },{
            headers:authHeader()
        }).then(res=>alert(res.data.message))
        roleInputRef.current.value="";

       /* fetch("http://localhost:8100/api/test/updateOtherUserRole",{
            method:'PUT',
            headers:authHeader(),
            body:{
                username: props.name,
                roles:input_role,
            }
        }).then(res=>{
            alert(res.data);
        })*/
    }
    return(
        <div className="container mt-3">
            <li>
                <table className="table">
                    <tbody>
                        <tr>
                            <td><b>Username: </b>{props.name}</td>
                            <td><b>email: </b>{props.email}</td>
                            <td><input type="text" ref={roleInputRef}/></td>
                            <td><button type="button"className="btn btn-primary" onClick={updateHandler}>update</button></td>
                        </tr>
                    </tbody>
                </table>
            </li>
            
        </div>);
}
export default UserDetails;