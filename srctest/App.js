import './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import NavbarLogin from "./components/NavbarLogin"
import Footer from './components/Footer';
import Login from './login/Login';
import useToken from './useToken';

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <div>
      <NavbarLogin />
      <Footer />
    </div>
  );
}

/*
*/

export default App;
