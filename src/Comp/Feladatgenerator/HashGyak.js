import React from "react";
import { Button } from "react-bootstrap";

let type;
var hossz;
var elemszam;
var numbers = [];
var numbersh2 = [];
var charakters = [];
var c1;
var c2;

function Generate() {
  document.getElementById("showcheckbtn").style.display = "block";

  var chars = "QWERTZUIOPLKJHGFDSAYXCVBNM";
  var h1 = "";
  var különbözet = 0;
  var input = document.getElementById("gen");
  hossz = Math.floor(Math.random() * 10) + 5;
  elemszam = Math.floor(Math.random() * 5) + 3;
  var cs = hossz * 70;

  type = Math.floor(Math.random() * 100) % 4;

  if (type === 0) {
    type = "szimpla";
  } else if (type === 1) {
    type = "lineáris";
  } else if (type === 2) {
    type = "négyzetes";
  } else if (type === 3) {
    type = "dupla";
  }

  console.log("Típus: " + type);

  if (elemszam >= hossz) {
    különbözet = elemszam - hossz + 2;
    elemszam -= különbözet;
  } else if (elemszam < hossz / 2) {
    elemszam += 1;
  }
  console.log("Elemek: " + elemszam);

  console.log("Hossz: " + hossz);
  for (let i = 0; i < elemszam; i++) {
    numbers.push(Math.floor(Math.random() * 100));
    numbersh2.push(Math.floor(Math.random() * 100));
    charakters.push(chars.charAt(Math.floor(Math.random() * 26)));
  }

  if (type === "szimpla" || type === "lineáris") {
    for (let i = 0; i < elemszam; i++) {
      if (i === elemszam) {
        h1 += "h1:( " + charakters[i] + " ) = " + numbers[i] + " ";
      }
      h1 += "h1:( " + charakters[i] + " ) = " + numbers[i] + ", ";
    }
    document.getElementById("hossz").innerHTML =
      "Szúrja be egy " +
      hossz +
      " hosszúságú hash táblába a következő objektumokat " +
      type +
      " hasítás alkalmazásával.";
    document.getElementById("h").innerHTML = h1 + " ";
  } else if (type === "négyzetes") {
    var oneortwo = Math.floor(Math.random() * 1);
    if (oneortwo === 0) {
      c1 = "c" + "<sub>" + "1" + "</sub>" + "=" + 1;
      c2 = "c" + "<sub>" + "2" + "</sub>" + "=" + 1;
    } else {
      c1 = "c" + "<sub>" + "1" + "</sub>" + "=" + 1;
      c2 = "c" + "<sub>" + "2" + "</sub>" + "=" + 2;
    }
    for (let i = 0; i < elemszam; i++) {
      if (i === elemszam) {
        h1 += "h1:( " + charakters[i] + " ) = " + numbers[i] + " ";
      }
      h1 += "h1:( " + charakters[i] + " ) = " + numbers[i] + ", ";
    }
    document.getElementById("hossz").innerHTML =
      "Szúrja be egy " +
      hossz +
      " hosszúságú hash táblába a következő objektumokat " +
      type +
      "( " +
      c1 +
      " , " +
      c2 +
      " )" +
      " hasítás alkalmazásával.";
    document.getElementById("h").innerHTML = h1 + " .";
  } else if (type === "dupla") {
    for (let i = 0; i < elemszam; i++) {
      if (i === elemszam) {
        h1 +=
          "h1:( " +
          charakters[i] +
          " ) = " +
          numbers[i] +
          ", " +
          "h2:( " +
          charakters[i] +
          " ) = " +
          numbersh2[i] +
          " ";
      }
      h1 +=
        "h1:( " +
        charakters[i] +
        " ) = " +
        numbers[i] +
        ", " +
        "h2:( " +
        charakters[i] +
        " ) = " +
        numbersh2[i] +
        " ";
    }
    document.getElementById("hossz").innerHTML =
      "Szúrja be egy " +
      hossz +
      " hosszúságú hash táblába a következő objektumokat " +
      type +
      " hasítás alkalmazásával.";
    document.getElementById("h").innerHTML = h1 + " .";
  }
  console.log("H1: " + h1);

  for (var i = 0; i < hossz; i++) {
    input.innerHTML +=
      '<input type="text" placeholder="' +
      i +
      '" name="' +
      i +
      '" size="4" id="inp' +
      i +
      '" className="center">';
  }

  console.log("first:" + charakters);
  document.getElementById("btngen").disabled = true;
  return charakters, type, hossz, elemszam;
}

function Check() {
  var leftover;
  var arrayfinal = [];

  for (let j = 0; j < hossz; j++) {
    arrayfinal[j] = " ";
  }

  if (type === "szimpla") {
    for (let j = 0; j < elemszam; j++) {
      leftover = numbers[j] % hossz;
      if (arrayfinal[leftover] === " ") {
        arrayfinal[leftover] = charakters[j];
      } else {
        arrayfinal[leftover] += charakters[j];
      }
    }
  }
  if (type === "lineáris") {
    for (let j = 0; j < elemszam; j++) {
      leftover = numbers[j] % hossz;
      if (arrayfinal[leftover] === " ") {
        arrayfinal[leftover] = charakters[j];
      } else {
        arrayfinal[leftover + 1] = charakters[j];
      }
    }
  }
  if (type === "dupla") {
    for (let j = 0; j < elemszam; j++) {
      leftover = numbers[j] % hossz;
      if (arrayfinal[leftover] === " ") {
        arrayfinal[leftover] = charakters[j];
      } else {
        leftover = numbersh2[j] % hossz;
        arrayfinal[leftover] = charakters[j];
      }
    }
  }
  if (type === "négyzetes") {
    for (let j = 0; j <= elemszam; j++) {
      leftover = numbers[j] % hossz;
      if (arrayfinal[leftover] === " ") {
        arrayfinal[leftover] = charakters[j];
      } else if (arrayfinal[leftover] !== " ") {
        leftover = numbers[j] % hossz;
        arrayfinal[leftover + c1] = charakters[j];
      } else if (
        arrayfinal[leftover + c1] !== " " &&
        leftover + c1 + c2 * c2 < hossz
      ) {
        leftover = numbers[j] % hossz;
        arrayfinal[leftover + c1 + c2 * c2] = charakters[j];
      }
    }
  }

  console.log("type:" + type);
  console.log("hossz%:" + hossz);
  console.log("third:" + charakters);
  console.log("numbers:" + numbers);
  console.log(charakters);
  console.log(arrayfinal);

  var userresult = [];

  for (let i = 0; i < hossz; i++) {
    if (document.getElementById("inp" + i).value !== " ") {
      userresult[i] = document.getElementById("inp" + i).value;
      if (userresult[i] === "") {
        userresult[i] = " ";
      }
    }
  }
  console.log(userresult);

  var counter = 0;
  for (let i = 0; i < hossz; i++) {
    if (userresult[i] == arrayfinal[i]) {
      counter += 1;
    }
  }
  console.log(counter);
  if (counter == hossz) {
    console.log("Jó megoldás!");
    document.getElementById("final").innerHTML = "Jó megoldás!";
  } else {
    console.log("Hibás megoldás, a helyes megoldás: [ " + arrayfinal + " ].");
    document.getElementById("final").innerHTML =
      "Hibás megoldás, a helyes megoldás: [ " + arrayfinal + " ].";
  }
}

/*
 */
export default function HashGyak() {
  return (
    <form>
      <h1 className="normalpad">Hash tábla feladatok</h1>
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
          <br />
          <div class="row justify-content-center text-center">
            <div id="hossz" className="center"></div>
            <div id="h" className="highpad"></div>
          </div>
          <div id="gen" className="normalpad"></div>
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
            Megold
          </Button>
        </div>
        <br />
        <b id="final" className="normalpad" />
      </div>
    </form>
  );
}
