import React, {Component} from "react"
import {Nav, Navbar, NavDropdown} from "react-bootstrap"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
}from "react-router-dom";

import Home from "../pages/Home";
//import Login from "../pages/Login";

export default class Navbar1 extends Component{
  render(){

    return(
    <Router>
    <div>
    <Navbar bg='navbar' variant='dark'>     
    
    <Nav>
    <Nav.Link as={Link} to={"/"} className="navbtn">Kezdőlap</Nav.Link>
      
    <Nav.Link href='/login' className="navbtn">Login</Nav.Link>
    
    </Nav>
    </Navbar>
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>        
        {/*<Route path="/login" element={<Login/>}/>  */}     
      </Routes>
    </div>
    </div> 
    </Router>
    )   
  }
}