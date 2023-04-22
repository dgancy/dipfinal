import React from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ModeDark() {
  var element = document.body;
  element.classList.add("dark-mode");
  element.classList.remove("light-mode");  
  element.classList.remove("red-mode");
}

function ModeLight() {
  var element = document.body;
  element.classList.add("light-mode");
  element.classList.remove("dark-mode");
  element.classList.remove("red-mode");
}

function ModeRed() {
  var element = document.body;
  element.classList.add("red-mode");
  element.classList.remove("light-mode");
  element.classList.remove("dark-mode");
}

const Footer = () => {
  return (<>
  <footer className="footer">
  <div>
        <div className="cardtheme2">
          <Card style={{ width: "6rem" }}>
            <Button variant="dark" onClick={ModeDark}>
              Dark
            </Button>
          </Card>
        </div>
        <div className="cardtheme3">
          <Card style={{ width: "6rem" }}>
            <Button variant="danger" onClick={ModeRed}>
              Red
            </Button>
          </Card>
        </div>

        <div className="cardtheme1">
          <Card style={{ width: "6rem" }}>
            <Button variant="light" onClick={ModeLight}>
              Light
            </Button>
          </Card>
        </div>
      </div>
      </footer>
  </>
  )
};

export default Footer;
