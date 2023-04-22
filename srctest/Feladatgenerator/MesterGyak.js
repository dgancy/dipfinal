import React from "react";
import { Button } from "react-bootstrap";

function feladat() {
  var eset = Math.floor(Math.random() * 3) + 1;
  var leiras = "Oldja meg a következő feladatot Mester tétel használatával.";
  var fea;
  var a;
  var b;
  var btört;
  var n = "n^" + Math.floor(Math.random() * 5);
  if (n == "n^4") {
    n = "nlogn";
  }
  if (n == "n^0") {
    n = "1";
  }
  if (eset == 1) {
    a = Math.floor(Math.random() * 100) + 1;
    b = Math.floor(Math.random() * 10) + 1;
    fea = "T(n)= " + a + "T(n/" + b + ")+" + n;
  }
  if (eset == 2) {
    a = Math.floor(Math.random() * 100) + 1; //számok közti összefüggés?
    b = Math.floor(Math.random() * 10) + 1;
    btört = Math.floor(Math.random() * 10) + 1; //a tört hogyan lehet?
    fea = "T(n)= " + a + "T(" + btört + "n/" + b + ")+" + n;
  }
  if (eset == 3) {
    a = Math.floor(Math.random() * 10) + 1; //számok közti összefüggés?
    b = Math.floor(Math.random() * 10) + 1;
    fea = "T(n)= " + a + "T(n/" + b + ")+" + n;
  }

  document.getElementById("feladat").innerHTML = fea;
  document.getElementById("leiras").innerHTML = leiras;
}
{/*      <p id="demo" />     document.getElementById("demo").innerHTML = eset;
*/}
function MesterGyak() {
  return (
    <div className="test">
      <h2>Mester tétel feladat generátor</h2>
      <Button variant="warning" onClick={feladat}>
        Új feladat
      </Button>
      <br />
      <br />
      <p id="leiras" />
      <p id="feladat" />
      <a>Válasz: </a>
      <input type="text" id="AA" className="mesterinput1"></input>
      <br />
      <br />
      <Button variant="warning" onClick={feladat}>
        Ellenőrzés
      </Button>
    </div>
  );
}

export default MesterGyak;
