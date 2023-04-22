import React from "react";
import { Button } from "react-bootstrap";

function Result() {
  var T = document.getElementById("A_element").value;
  var N = document.getElementById("B_element").value;
  var n = document.getElementById("N_element").value;

  var n_elem = "( n/" + N + " ) " + "<sup>i</sup>";
  var magassag = "log" + "<sub>" + N + "</sub>" + "n";
  var levelszameredmeny = "n" + "log" + "<sub>" + N + "</sub>" + T;

  if (n === "n") {
    n_elem = n_elem;
  }
  if (n === "n2") {
    n_elem = "(" + n_elem + ")" + "<sup>2</sup>";
  }
  if (n === "n3") {
    n_elem = "(" + n_elem + ")" + "<sup>3</sup>";
  }
  if (n === "n4") {
    n_elem = "(" + n_elem + ")" + "<sup>4</sup>";
  }
  if (n === "n5") {
    n_elem = "(" + n_elem + ")" + "<sup>5</sup>";
  }

  document.getElementById("one-edge").innerHTML = "i-ik szint, csúcs költsége: " + n_elem;
  document.getElementById("edge-number").innerHTML =
    "Az i-edik szint csúcsainak száma: " + T + "<sup>i</sup>";
  document.getElementById("tree-high").innerHTML =
    "Az i-edik szint összköltsége: " + "( n/" + N + " ) " + "<sup>i</sup>";
  document.getElementById("leaf-number").innerHTML =
    "Levelek száma: " + T + "<sup>" + magassag + "</sup>" + " = " + levelszameredmeny;
  document.getElementById("leaf-high").innerHTML = "A fa magassága: " + magassag;
  document.getElementById("final").innerHTML = "Összeképlet: " + "T(n) = " + "<sub>" + "i=0" + "</sub>" + " Σ " + "<sup>" + "log" + "<sub>" + N + "</sub>" + "</sup>" + "<sup>i-1</sup>" + " " + T + "<sup>i</sup>" + " * " + n_elem + " * " + levelszameredmeny;
}

export default function Rekurzios() {
  return (
    <form>
      <h1 className="highpad">Rekurziós fa módszer</h1>
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
        <b id="one-edge" className="normalpad"></b>
        <br />
        <b id="edge-number" className="normalpad" />
        <br />
        <b id="tree-high" className="normalpad" />
        <br />
        <b id="leaf-high" className="normalpad" />
        <br />
        <b id="leaf-number" className="normalpad" />
        <br />
        <b id="final" className="normalpad" />
      </div>
    </form>
  );
}
