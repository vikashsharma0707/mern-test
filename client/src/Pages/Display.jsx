import axios from "axios";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';



const Display=()=>{

    const [data,setdata] = useState([]);

    const loaddata=()=>{
        let api= "http://localhost:8000/employee/userDisplay";
        axios.get(api).then((res)=>{
           setdata(res.data)
        })
    }

    useEffect(()=>{
        loaddata()
    },[])

    const ans=data.map((key)=>{
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

export default Display;