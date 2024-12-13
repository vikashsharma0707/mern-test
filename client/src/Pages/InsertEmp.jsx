import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios"


const Insertemp=()=>{

    const [input,setinput] = useState({})

    const handlechange=(e)=>{
        let name = e.target.name;
        let value= e.target.value;
        setinput(values=>({...values,[name]:value}))
        console.log(input)
    }

    const handleSubmit=()=>{
        let api="http://localhost:8000/employee/saveData";
        axios.post(api,input).then((res)=>{
               alert("data send sucessfully")
        })
    }

    
    


    return(
        <>
        <h1>This is insert page</h1>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Employee number</Form.Label>
        <Form.Control  placeholder="Enter email" name="empno" value={input.empno} onChange={handlechange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Name</Form.Label>
        <Form.Control  placeholder="Enter email" name="empname" value={input.empname} onChange={handlechange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter City</Form.Label>
        <Form.Control placeholder="Enter email" name="empcity" value={input.empcity} onChange={handlechange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Designation </Form.Label>
        <Form.Control  placeholder="Enter email" name="empdesi" value={input.empdesi} onChange={handlechange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Salary</Form.Label>
        <Form.Control  placeholder="Enter email" name="empsalary" value={input.empsalary} onChange={handlechange} />
      </Form.Group>

      
      <Button variant="primary" onClick={handleSubmit} >
        Submit
      </Button>
    </Form>
        </>
    )
}

export default Insertemp;