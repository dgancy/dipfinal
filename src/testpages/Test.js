import React from "react";

export default function Test() {
  return (
    <div className="test">
      <h2>Test</h2>
      <fieldset>
        <div>
          <br />
          <textarea rows={2} cols={28}>fds</textarea>
          <br />
          <br />
          <input type="text" className="testinput" />
        </div>
      </fieldset>
      <div>
        <br />
        <img src={require("../tate.jpg")} className="testimg"></img>
        <br />
        <br />
        <input type="text" className="testinput" />
      </div>

      <div>
        <br />
        <img src={require("../tate.jpg")} className="testimg"></img>
        <br />
        <br />
        <input type="text" className="testinput" />
      </div>

      <div>
        <br />
        <img src={require("../tate.jpg")} className="testimg"></img>
        <br />
        <br />
        <input type="text" className="testinput" />
      </div>
      <br />
      <button className="testbutton">Leadom</button>

      <br />
      <hr />
    </div>
  );
}

function Mistakes() {}
