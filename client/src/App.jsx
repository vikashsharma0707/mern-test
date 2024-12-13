import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import InsertEmp from "./Pages/InsertEmp";
import Display from "./Pages/Display";
import SalaryTotal from "./Pages/SalaryTotal";
import SearchEmp from "./Pages/SearchEmp";
import Update from "./Pages/Update";
import Contact from "./Pages/Contact";
import Edit from "./Pages/Edit";




const App=()=>{
  return(
    <>
    
  
    <BrowserRouter>
      <Routes>
           <Route  path="/"  element={<Layout/>}>
           <Route index home element={<Home/>}/>
           <Route path="home" element={<Home/>}/> 
           <Route path="insertemp" element={<InsertEmp/>}/> 
           <Route path="display" element={<Display/>}/> 
           <Route path="salarytotal" element={<SalaryTotal/>}/> 
           <Route path="searchemp" element={<SearchEmp/>}/> 
           <Route path="update" element={<Update/>}/> 
           <Route path="contact" element={<Contact/>}/> 
           <Route path="edit/:empid" element={<Edit/>}/> 



           </Route>


      </Routes>
    
    
    </BrowserRouter>
    </>
  )
}

export default App;