import React from "react";
import { Button } from "react-bootstrap";

function feladat() {
  var eset = Math.floor(Math.random() * 3) + 1;
  var leiras = "Oldja meg a következő feladatot Mester tétel használatával.";
  var fea;
  var a;
  var b;
  var btört;
  var n;
  if (eset == 1) {
    a = Math.floor(Math.random() * 100) + 1;
    b = Math.floor(Math.random() * 10) + 1;
    n = "n"; //kerdes 1 milyen n-ek lehetnek itt?
    fea = "T(n)=" + a + "T(n/" + b + ")+" + n;
  }
  if (eset == 2) {
    a = Math.floor(Math.random() * 100) + 1;//számok közti összefüggés?
    b = Math.floor(Math.random() * 10) + 1;
    btört = Math.floor(Math.random() * 10) + 1;//a tört hogyan lehet?
    n = "n"; //kerdes 1 milyen n-ek lehetnek itt?
    fea = "T(n)=" + a + "T("+btört+"n/" + b + ")+" + n;
}
if (eset == 3) {
    a = Math.floor(Math.random() * 10) + 1;//számok közti összefüggés?
    b = Math.floor(Math.random() * 10) + 1;
    n = "n"; //kerdes 1 milyen n-ek lehetnek itt?
    fea = "T(n)=" + a + "T(n/" + b + ")+" + n;
    
  }

  document.getElementById("feladat").innerHTML = fea;
  document.getElementById("demo").innerHTML = eset;
  document.getElementById("leiras").innerHTML = leiras;
}

function MesterGyak() {
  return (
    <div className="test">
      <h1>Mester tétel gyakorló</h1>
      <br />
      <Button variant="primary" onClick={feladat}>
        Új feladat
      </Button>
      <br />
      <p id="demo" />
      <p id="leiras" />
      <p id="feladat" />
      <a>Válasz: </a>
      <input type="text" id="AA" className="mesterinput1"></input>
      <br />
    </div>
  );
}

export default MesterGyak;
