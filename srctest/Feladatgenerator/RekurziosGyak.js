import React from "react";
import { Button } from "react-bootstrap";

function general() {//rekurziósnál milyen n-ek szerepelhetnek?
  var leiras = "Oldja meg a következő feladatot Rekurziós fa módszer használatával.";
  var fea;
  var a;
  var b;
  var n = "n^" + Math.floor(Math.random() * 5);
  var btört;//lehet-e?
  if (n == "n^4") {
    n = "nlogn";
  }
  if (n == "n^0") {
    n = "1";
  }
  a = Math.floor(Math.random() * 100) + 1;
  b = Math.floor(Math.random() * 10) + 1;
  fea = "T(n)= " + a + "T(n/" + b + ")+" + n;

  document.getElementById("feladat").innerHTML = fea;
  document.getElementById("leiras").innerHTML = leiras;
}

function RekurziosGyak() {
  return (
    <>
      <div className="test">
        <h2>Rekurzios fa feladat generátor</h2>
        <Button variant="warning" onClick={general}>
          Új feladat
        </Button>
        <br/>
        <p id="demo" />
      <p id="leiras" />
      <p id="feladat" />
      <a>Válasz: </a>
      <input type="text" className="mesterinput1"></input>
      <br />
      <br />
      <Button variant="warning" onClick={general}>
      Ellenőrzés
        </Button>
      </div>
    </>
  );
}
export default RekurziosGyak;
