import { useEffect, useState } from "react"
import axios from "axios"
function ListAllReport(){
    const[report,setReport] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8100/files3/listReport")
        .then((res)=>{setReport(res.data)})
    },[])

    return <div className="card">
          <div className="card-header">List of Files</div>
          <ul className="list-group list-group-flush">
            {report &&
              report.map((file, index) => (
                <li className="list-group-item" key={index}>
                  <a href={"http://localhost:8100/files3/decryptReport/download/"+file}>{file}</a>
                </li>
              ))}
          </ul>
        </div>
}

export default ListAllReport;