import React, {Component} from "react"
import {Nav, Navbar, NavDropdown} from "react-bootstrap"

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
}from "react-router-dom";

import Home from "../pages/Home";
import Bfa from "../Algoritmus2/Bfa";
import Test from "../testpages/Test";
import Login from "../pages/Login";
//import Login2 from "../other/Login2";
import Mester from "../Algoritmus2/Mester";
import Helyettes from "../Algoritmus2/Helyettes";
import Rekurzios from "../Algoritmus2/Rekurzios";
import MesterGyak from "../Gyakorlo/MesterGyak";
//import Register from "../other/Register";

export default class Navbar1 extends Component{
  render(){

    return(
    <Router>
    <div>
    <div>
    <Navbar  bg='black' variant='dark'>     
    <Nav>
    <Nav.Link as={Link} to={"/"} >Kezdőlap</Nav.Link>
    
    <Nav.Link as={Link} to={"/test"}>Teszt</Nav.Link>

      <NavDropdown title="Algoritmus II">
        <NavDropdown.Item as={Link} to={"/helyettesito"}>Helyettesítő módszer</NavDropdown.Item>
        <NavDropdown.Item as={Link} to={"/rekurzios"}>Rekurziós fa</NavDropdown.Item>
        <NavDropdown.Item as={Link} to={"/mester"}>Mester Tétel</NavDropdown.Item>
        <NavDropdown.Item as={Link} to={"/bfa"}>Bfa</NavDropdown.Item>
      </NavDropdown>  

      <NavDropdown title="Gyakorlók">
        <NavDropdown.Item as={Link} to={"/helyettesitogyak"}>Helyettesítő módszer Gyakorló</NavDropdown.Item>
        <NavDropdown.Item as={Link} to={"/rekurziosgyak"}>Rekurziós fa Gyakorló</NavDropdown.Item>
        <NavDropdown.Item as={Link} to={"/mestergyak"}>Mester Tétel Gyakorló</NavDropdown.Item>
        <NavDropdown.Item as={Link} to={"/bfagyak"}>Bfa Gyakorló</NavDropdown.Item>
      </NavDropdown>  
      
      <Nav.Link href='/login' >Profile</Nav.Link>
      {/*<Nav.Link href='/register' >Register</Nav.Link>*/}
      {/*<Nav.Link href='/logintest'>LoginTest</Nav.Link>*/}

    </Nav>
    </Navbar>
    </div>
    
    <div>
      <Routes>
        <Route path="/bfa" element={<Bfa/>}/>
        <Route path="/test" element={<Test/>}/>
        <Route path="/mester" element={<Mester/>}/>
        <Route path="/mestergyak" element={<MesterGyak/>}/>
        <Route path="/" element={<Home/>}/>        
        <Route path="/login" element={<Login/>}/>        
        <Route path="/helyettesito" element={<Helyettes/>}/>        
        <Route path="/rekurzios" element={<Rekurzios/>}/>        
        {/*<Route path="/logintest" element={<LoginForm/>}/>*/}        
      </Routes>
    </div>
    </div> 
    </Router>
    )   
  }
}