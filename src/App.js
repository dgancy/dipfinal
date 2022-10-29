import './App.css';
import React from 'react'
//import { useAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.css'
import NavbarLogin from "./components/NavbarLogin"
//import NavbarLogout from "./components/NavbarLogout"
import Footer from './components/Footer';
//import LoginForm from "./login/LoginForm"


function App() {

  //const {isAuthenticated } = useAuth0();

  return (
    <div>
<NavbarLogin/>
      {/*{isAuthenticated ? (
        <NavbarLogin/>     
       ) : (
        <NavbarLogout/> 
    )}*/}
    <Footer/>
    </div>  
    )
}

export default App;
