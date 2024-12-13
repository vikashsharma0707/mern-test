import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link, Outlet} from "react-router-dom"



const Layout=()=>{
    return(
        <>
        <h1>This is display page</h1>
        <Navbar  style={{backgroundColor:"red"}}>
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto"  >
            <Nav.Link as={Link} to="home">Home</Nav.Link> 
            <Nav.Link as={Link} to="insertemp">InsertEmp</Nav.Link> 
            <Nav.Link as={Link} to="display">Display</Nav.Link> 
            <Nav.Link as={Link} to="salarytotal">SalaryTotal</Nav.Link> 
            <Nav.Link as={Link} to="searchemp">SearchEmp</Nav.Link> 
            <Nav.Link as={Link} to="update">Update</Nav.Link> 
            <Nav.Link as={Link} to="contact">Contact</Nav.Link> 
            
          </Nav>
        </Container>
      </Navbar>


      <Outlet/>

        </>
    )
}

export default Layout;