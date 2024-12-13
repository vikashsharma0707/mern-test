
import axios from "axios";
import { useState } from "react";
import Table from 'react-bootstrap/Table';



const SearchEmp=()=>{
    const [data,setdata] = useState([])
    const [empno,setempno] =useState("")


    const handlesearch=()=>{
        let api="http://localhost:8000/employee/userSearch"
        axios.post(api,{empno:empno}).then((res)=>{
          setdata(res.data)
        })
    
    }

    const ans = data.map((key)=>{
return(
    <>
     <tr>
        <td>{key.empno}</td>
        <td>{key.empname}</td>
        <td>{key.empcity}</td>
        <td>{key.empdesi}</td>
        <td>{key.empsalary}</td>
     </tr>
    
     </>
)
    })
    return(
        <>
        <h1>This is search page</h1>

        <input type="text" value={empno} onChange={(e)=>{setempno(e.target.value)}}/>
        <button onClick={handlesearch}>search</button><br/><br/>

        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Employee No</th>
          <th>Name</th>
          <th>City</th>
          <th>Designation</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tbody>
        {ans}
      </tbody>

      </Table>
        
        </>
    )
}

export default SearchEmp;