import React from "react";
import { Button } from "react-bootstrap";

var a_element;
var b_element;
var n_element;
var nsup;
function Generate() {
  document.getElementById("showquests").style.display = "block";

  var eset = Math.floor(Math.random() * 3) + 1;
  var fea;
  var tört;
  nsup = Math.floor(Math.random() * 5);
  n_element = "n" + "<sup>" + nsup + "</sup>";

  if (n_element == "n" + "<sup>" + 4 + "</sup>") {
    n_element = "nlogn";
  }
  if (n_element == "n" + "<sup>" + 0 + "</sup>") {
    n_element = "1";
  }
  if (n_element == "n" + "<sup>" + 1 + "</sup>") {
    n_element = "n";
  }
  if (eset == 1) {
    a_element = Math.floor(Math.random() * 20) + 2;
    b_element = Math.floor(Math.random() * 10) + 1;
    if (a_element < b_element) {
      a_element += 5;
    }
    fea = "T(n)= " + a_element + "T(n/" + b_element + ")+" + n_element;
  }
  if (eset == 2) {
    a_element = Math.floor(Math.random() * 20) + 2; //számok közti összefüggés?
    b_element = Math.floor(Math.random() * 10) + 1;
    tört = Math.floor(Math.random() * 10) + 1;
    fea =
      "T(n)= " + a_element + "T(" + tört + "n/" + b_element + ")+" + n_element;
  }
  if (eset == 3) {
    a_element = Math.floor(Math.random() * 10) + 2; //számok közti összefüggés?
    b_element = Math.floor(Math.random() * 10) + 1;
    fea = "T(n)= " + a_element + "T(n/" + b_element + ")+" + n_element;
  }

  document.getElementById("questtwo").innerHTML =
    "Oldja meg a következő feladatot Mester tétel használatával. " + fea;
}
//
function Check() {
  var user_a_element = document.getElementById("quest2-a-elem").value;
  var user_b_element = document.getElementById("quest2-b-elem").value;
  var user_n_element = document.getElementById("quest2-f(n)-elem").value;
  var user_eset = document.getElementById("type").value;
  var user_E_element = document.getElementById(
    "quest2-E-kiegeszito-erteke"
  ).value;
  var user_master_result = document.getElementById("quest2-final").value;
  var mistakes = [];

  let logarithm_element = (Math.log(a_element) / Math.log(b_element)).toFixed(
    3
  );

  let epszilon = 0;
  var eset;
  let differencial = 0;
  if (n_element == "n") {
    differencial = 1;
  } else if (n_element == "n^2") {
    differencial = 2;
  } else if (n_element == "n^3") {
    differencial = 3;
  } else if (n_element == "1") {
    differencial = 0;
  }

  if (logarithm_element < differencial) {
    epszilon = differencial - logarithm_element;
  } else {
    epszilon = logarithm_element - differencial;
  }

  if (a_element >= 1 && b_element > 1) {
    var eset;
    if (logarithm_element == differencial || n_element == "1") {
      eset = 2;
    }
    if (
      logarithm_element > differencial &&
      logarithm_element - epszilon == differencial
    ) {
      eset = 1;
    }
    if (logarithm_element < differencial) {
      eset = 3;
    }
  }
  epszilon = epszilon.toFixed(3);

  if (
    user_a_element != a_element ||
    user_b_element != b_element ||
    user_n_element != "n^" + nsup
  ) {
    mistakes.push(
      "Hibás leolvasás!" +
        " A helyes értékek: A: " +
        a_element +
        " B: " +
        b_element +
        " f(n): " +
        n_element
    );
  }
  if (user_eset != eset || user_E_element != epszilon) {
    mistakes.push(
      " Hibás eset választás!" +
        " A helyes eset: " +
        eset +
        " A helyes E :" +
        epszilon
    );
  }
  if (user_master_result != n_element) {
    mistakes.push(
      " Hibás eredmény!" + " A helyes eredmény: Θ( " + n_element + " )"
    );
  }
  document.getElementById("final-0").innerHTML = mistakes[0];
  document.getElementById("final-1").innerHTML = mistakes[1];
  document.getElementById("final-2").innerHTML = mistakes[2];
}

function MesterGyak() {
  return (
    <form>
      <h1 className="normalpad">Mester-tétel feladat generátor</h1>
      <div class="form-group">
        <div
          class="row justify-content-center text-center"
          className="normalpad"
        >
          <Button variant="success" onClick={Generate}>
            Új feladat
          </Button>
          <br />
          <p id="leiras" />
          <p id="feladat" />
        </div>
        <div className="normalpad" id="questtwo">
          {" "}
        </div>

        <div class="container" id="showquests" className="hidden">
          <div class="row justify-content-center text-center">
            {" "}
            <div class="col-2">
              <div className="normalpad">
                <b>A-értéke :</b>
                <input
                  type="number"
                  class="form-control"
                  id="quest2-a-elem"
                />{" "}
              </div>
            </div>
            <div class="col-2">
              <div className="normalpad">
                <b>B-értéke :</b>
                <input
                  type="text"
                  class="form-control"
                  id="quest2-b-elem"
                />{" "}
              </div>
            </div>
            <div class="col-2">
              <div className="normalpad">
                <b>f(n)-értéke :</b>
                <input
                  type="text"
                  class="form-control"
                  id="quest2-f(n)-elem"
                />{" "}
              </div>
            </div>
          </div>
          <div class="row justify-content-center text-center">
            {" "}
            <div class="col-2">
              {" "}
              <b>Feladat típusa :</b>
              <select id="type" name="type" class="form-control">
                <option> </option>
                <option value="1-es-eset">Első eset</option>
                <option value="2-es-eset">Második eset</option>
                <option value="3-as-eset">Harmadik eset</option>
              </select>
            </div>
            <div class="col-3">
              <div className="normalpad">
                <b>Epszilon érték(ε):</b>
                <input
                  type="text"
                  class="form-control"
                  id="quest2-E-kiegeszito-erteke"
                />{" "}
              </div>
            </div>
          </div>
          <div class="row justify-content-center text-center">
            {" "}
            <div class="col-3">
              <div className="normalpad">
                <b>Végeredmény:</b>
                <input
                  type="text"
                  class="form-control"
                  id="quest2-final"
                />{" "}
              </div>
            </div>
          </div>
          <div class="row justify-content-center text-center">
            <Button variant="success" onClick={Check}>
              Kiszámol
            </Button>
          </div>
        </div>
        <div className="normalpad" id="final-0"></div>
        <div className="normalpad" id="final-1"></div>
        <div className="normalpad" id="final-2"></div>
        <div className="normalpad" id="final-3"></div>
      </div>
      <div className="normalpad">
        <br />
        <b id="tree" className="normalpad"></b>
      </div>
    </form>
  );
}

export default MesterGyak;
