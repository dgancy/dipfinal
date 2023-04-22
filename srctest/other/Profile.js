import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "../components/LogInFunction";
import { LogoutButton } from "../components/LogOutFunction";
import { Profile } from "../components/Profile";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ModeDark() {
  var element = document.body;
  element.classList.add("dark-mode");
  element.classList.remove("light-mode");  
  element.classList.remove("normal-mode");
}

function ModeLight() {
  var element = document.body;
  element.classList.add("light-mode");
  element.classList.remove("dark-mode");
  element.classList.remove("normal-mode");
}

function ModeNormal() {
  var element = document.body;
  element.classList.add("normal-mode");
  element.classList.remove("light-mode");
  element.classList.remove("dark-mode");
}

function Login() {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      <div className="div-body">
        <br />
        {isAuthenticated ? (
          <>
            <Profile />
            <LogoutButton />
          </>
        ) : (
          <LoginButton />
        )}
      </div>

      <div>
        <div className="cardtheme21">
          <Card style={{ width: "6rem" }}>
            <Card.Img variant="top" src="tate.jpg" />
            <Button variant="dark" onClick={ModeDark}>
              Dark
            </Button>
          </Card>
          <br />
        </div>
        <div className="cardtheme31">
          <Card style={{ width: "6rem" }}>
            <Card.Img variant="top" src="tate.jpg" />
            <Button variant="primary" onClick={ModeNormal}>
              Normal
            </Button>
          </Card>
          <br />
        </div>

        <div className="cardtheme11">
          <Card style={{ width: "6rem" }}>
            <Card.Img variant="top" src="tate.jpg" />
            <Button variant="light" onClick={ModeLight}>
              Light
            </Button>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Login;
