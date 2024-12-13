import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Form from 'react-bootstrap/Form'
import axios from "axios";



const Edit=()=>{
    const {empid} = useParams();
    const [input,setinput]=useState({})

    const loaddata=()=>{
      let api="http://localhost:8000/employee/userEdit";
      axios.post(api,{id:empid}).then((res)=>{
        setinput(res.data)
      })
    }

    useEffect(()=>{
        loaddata()
    },[])

 const handledata=(e)=>{
    let name = e.target.name;
    let value= e.target.value;
    setinput(values=>({...values,[name]:value}))
 }


 const handlesubmit=()=>{
    let api="http://localhost:8000/employee/userEditsave";
    axios.post(api,input).then((res)=>{
      alert("data updated sucessfully")
    })
 }




return(
    <>
    <h1>This is edit page</h1>
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Enter employee number</Form.Label>
        <Form.Control type="text" placeholder="Enter empno"  name="empno" value={input.empno}  onChange={handledata}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Enter employee name</Form.Label>
        <Form.Control type="text" placeholder="Enter employee name"  name="empname" value={input.empname}  onChange={handledata} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Enter designation</Form.Label>
        <Form.Control type="text" placeholder="Enter designation" name="empcity" value={input.empcity}   onChange={handledata}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Enter salary</Form.Label>
        <Form.Control type="text" placeholder="Enter Salary" name="empdesi" value={input.empdesi}   onChange={handledata}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Enter salary</Form.Label>
        <Form.Control type="text" placeholder="Enter Salary" name="empsalary" value={input.empsalary}   onChange={handledata}/>
      </Form.Group>
      
    </Form>

    <button onClick={handlesubmit}>Submit</button>

    </>
)
}


export default Edit;