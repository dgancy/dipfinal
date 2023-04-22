import React from "react";
import { Button } from "react-bootstrap";

function feladatsor() {
  
}

export default function Test() {
  return (
    <div className="test">
      <h2>Test</h2>
      <br />
      <Button variant="warning" className="btn" onClick={feladatsor}>
        Teszt feladatsor készítés
      </Button>
      <br />
      <fieldset>
        <div>
          <br />
          <p id="leiras" />
          <p id="feladat" />
          <a>Válasz: </a>
          <input type="text" id="AA" className="mesterinput1"></input>
          <br />
          <input type="text" className="testinput" />
        </div>
      </fieldset>
      <div>
        <br />
        <img src={require("../test.jpg")} className="testimg"></img>
        <br />
        <br />
        <input type="text" className="testinput" />
      </div>

      <div>
        <br />
        <img src={require("../test.jpg")} className="testimg"></img>
        <br />
        <br />
        <input type="text" className="testinput" />
      </div>

      <div>
        <br />
        <img src={require("../test.jpg")} className="testimg"></img>
        <br />
        <br />
        <input type="text" className="testinput" />
      </div>
      <Button variant="warning" className="testbutton">
        Leadom
      </Button>
      <hr />
      <br />
    </div>
  );
}

function Mistakes() {}
