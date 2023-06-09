import React from "react";
import { Button } from "react-bootstrap";

function Result() {
  var a_element = document.getElementById("A_element").value;
  var b_element = document.getElementById("B_element").value;
  var n_element = document.getElementById("N_element").value;

  let logarithm_element = (Math.log(a_element) / Math.log(b_element)).toFixed(
    3
  );
  let epszilon = 0;
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

  var muvelet;
  if (eset == 1) {
    muvelet = "-";
    var final_result = Number(logarithm_element) - Number(epszilon);
  } else if (eset == 3) {
    muvelet = "+";
    var final_result = Number(logarithm_element) + Number(epszilon);
  }

  if (a_element && b_element && n_element && eset != "2") {
    document.getElementById("logarithm").innerHTML =
      "Képlet: " +
      "n" +
      "<sup>" +
      "log" +
      "<sub>" +
      "b" +
      "</sub>" +
      "a" +
      "</sup>" +
      " = Θ(n" +
      "<sup>" +
      logarithm_element +
      "</sup>" +
      ")";
    document.getElementById("eset").innerHTML = "Eset: " + eset;
    document.getElementById("seged").innerHTML =
      "Epszilon érték(ε): : " + epszilon;
    document.getElementById("seged").innerHTML =
      "Epszilon érték(ε): " +
      epszilon +
      " => Θ(nlog " +
      "<sup>" +
      epszilon +
      "</sup>" +
      ")";
    document.getElementById("result").innerHTML =
      "A mester tétel " +
      eset +
      ". esetét alkalmazzuk : " +
      "Θ(nlog " +
      "<sup>" +
      logarithm_element +
      "</sup>" +
      "<sup>" +
      muvelet +
      "</sup>" +
      "<sup>" +
      epszilon +
      "</sup>" +
      ")=" +
      "Θ(nlog " +
      "<sup>" +
      final_result +
      "</sup>" +
      ")";
    document.getElementById("final").innerHTML = "T(n)= Θ(" + n_element + ")";
  }
  if (a_element && b_element && n_element && eset == "2") {
    document.getElementById("logarithm").innerHTML =
      "Képlet: " +
      "n" +
      "<sup>" +
      "log" +
      "<sub>" +
      "b" +
      "</sub>" +
      "a" +
      "</sup>" +
      " = Θ(n" +
      "<sup>" +
      logarithm_element +
      "</sup>" +
      ")";
    document.getElementById("eset").innerHTML = "Eset: " + eset;
    document.getElementById("final").innerHTML =
      "Megoldás: T(n)= Θ(" + n_element + ")";
  }
}

function Mester() {
  return (
    <form>
      <h1 className="highpad">Mester-tétel</h1>
      <div class="form-group">
        <div class="container">
          <div class="row justify-content-center text-center">
            <div class="col-2">
              <b>A:</b>
              <input
                type="text"
                class="form-control"
                id="A_element"
                placeholder="A elem"
              />{" "}
              <small class="form-text text-muted">(T elem szorzata)</small>
            </div>
            <div class="col-2">
              {" "}
              <b>B:</b>
              <input
                type="text"
                class="form-control"
                id="B_element"
                placeholder="B elem"
              />
              <small class="form-text text-muted">(n elem szorzata)</small>
            </div>
            <div class="col-2">
              {" "}
              <b>f(n): </b>
              <input
                type="text"
                class="form-control"
                id="N_element"
                placeholder="n elem"
              />
              <small class="form-text text-muted">(n kitevős tag)</small>
            </div>
          </div>
          <div class="row justify-content-center text-center">
            <Button variant="success" onClick={Result}>
              Kiszámol
            </Button>
          </div>
        </div>
      </div>
      <div className="normalpad">
        <br />
        <b id="logarithm" className="normalpad"></b>
        <br />
        <b id="eset" className="normalpad" />
        <br />
        <b id="seged" className="normalpad" />
        <br />
        <b id="result" className="normalpad" />
        <br />
        <b id="final" className="normalpad" />
      </div>
    </form>
  );
}
export default Mester;
