import React from "react";
import { Button } from "react-bootstrap";

var type;
var kezdmo = [];
var ÖsszesCimlet;

function Generate() {
  document.getElementById("showcheckbtn").style.display = "block";

  type = Math.floor(Math.random() * 3);
  if (type === 0) {
    type = "ElsőFiú";
  } else if (type === 1) {
    type = "Testvér";
  } else if (type === 2) {
    type = "Apa";
  } else if (type === 3) {
    type = "Megoldás";
  } else if (type === 4) {
    type = "LehetségesMegoldás";
  } else if (type === 5) {
    type = "Visszaállit";
  }
  var arraychecker = [];
  var number = Math.floor(Math.random() * 2) + 2;
  for (let i = 0; i <= number; i++) {
    var help = Math.floor(Math.random() * 7) + 1;
    if (arraychecker.length > 0) {
      for (let k = 0; k < arraychecker.length; k++) {
        if (help == arraychecker[k]) {
          help+=2;
        }
      }
    }
    arraychecker.push(help);
    arraychecker.sort();
    kezdmo.push(help + "");
  }
  kezdmo.sort();

  ÖsszesCimlet = Math.floor(Math.random() * 5) + 10;
  var j = 0;
  var input = document.getElementById("generate");

  input.innerHTML +=
    type +
    ": " +
    ' <input type="text" name="' +
    j +
    '"  className="normalpad" size="2" id="inp' +
    j +
    '">    <br/>   ';
  document.getElementById("leiras").innerHTML =
    "Visszalépéses keresést alkalmazunk a pénzváltás problémára.<br/> Egy megoldáskezdemény áll rendelkezésünkre: < " +
    kezdmo +
    " > <br/> Összesen " +
    ÖsszesCimlet +
    " címlet van. Adja meg az alábbi művelete eredményét. <br/> <br/>";

  console.log(ÖsszesCimlet);
  console.log(kezdmo);
  console.log(type);
  document.getElementById("btngen").disabled = true;
}

function Check() {
  var userresult = [];
  userresult = document.getElementById("inp0").value.split(",");
  var solve = 0;
  var help = 0;

  if (type === "ElsőFiú") {
    solve = kezdmo;
    help = parseInt(kezdmo[kezdmo.length - 1]);
    help = help + 1 + "";
    solve.push(help);
  } else if (type === "Apa") {
    kezdmo.pop();
    solve = kezdmo;
  } else if (type === "Testvér") {
    kezdmo.pop();
    help = parseInt(kezdmo[kezdmo.length - 1]);
    help = help + 1 + "";
    solve = kezdmo;
    solve.push(help);
  }

  var point = 0;
  for (let i = 0; i < solve.length; i++) {
    if (userresult[i] === solve[i]) {
      point += 1;
    }
  }
  console.log("Pont:" + point);

  if (point === solve.length) {
    console.log("Jó megoldás!");
    document.getElementById("final").innerHTML = "Jó megoldás!";
  } else {
    console.log("Hibás megoldás, a helyes megoldás: [ " + solve + " ].");
    document.getElementById("final").innerHTML =
      "Hibás megoldás, a helyes megoldás: [ " + solve + " ].";
  }
  console.log(userresult);
  console.log(solve);
}

export default function BackporpGyak() {
  return (
    <form>
      <h1 className="normalpad">Visszalépéses feladatok</h1>
      <div class="form-group">
        <div class="container">
          <div
            className="normalpad"
            class="row justify-content-center text-center"
          >
            <Button variant="success" id="btngen" onClick={Generate}>
              Új feladat
            </Button>
          </div>
          <div class="row justify-content-center text-center">
            <div id="leiras" className="center"></div>
            <div id="generate" className="normalpad"></div>
          </div>
        </div>
      </div>
      <div className="normalpad">
        <div className="lowpad" id="generate"></div>
        <div
          class="row justify-content-center text-center"
          className="hidden"
          id="showcheckbtn"
        >
          <Button id="btncheck" variant="success" onClick={Check}>
            Ellenőriz
          </Button>
        </div>
        <b id="final" className="normalpad" />
      </div>
    </form>
  );
}
