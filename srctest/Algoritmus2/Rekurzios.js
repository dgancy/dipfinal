import React from "react";
import { Button } from "react-bootstrap";

function szamol() {

  var x = document.getElementById("show");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else{
  x.style.display = "block";
  }

  var T = document.getElementById("T").value;
  var N = document.getElementById("N").value;
  var n = document.getElementById("n").value;

  var N0 = "n/" + N + "^i";
  var magassag = "logˇ " + N + "n";
  //var levelszam = T + "^" + magassag;
  var levelszameredmeny = "n" + "logˇ" + N + " " + T;
  var kepletn;
  var Nkeplet = "(" + T + "/" + N + ")" + "^i";

  var N1;
  if (n === "n") {
    N1 = N0;
    kepletn = "n";
  }
  if (n === "n2") {
    N1 = "(" + N0 + ")^2";
    kepletn = "n" + "^2";
  }
  if (n === "n3") {
    N1 = "(" + N0 + ")^3";
    kepletn = "n" + "^3";
  }
  if (n === "n4") {
    N1 = "(" + N0 + ")^4";
    kepletn = "n" + "^4";
  }
  if (n === "n5") {
    N1 = "(" + N0 + ")^5";
    kepletn = "n" + "^5";
  }

  document.getElementById("1csucs").innerHTML = N1;
  document.getElementById("1csucs2").innerHTML = N1;

  document.getElementById("csucsokszama").innerHTML = T + "^i";
  document.getElementById("csucsokszama2").innerHTML = T + "^i";

  document.getElementById("famagassag").innerHTML = "n/" + N + "^i";

  document.getElementById("levelszam").innerHTML =
    T + "^" + magassag + "=" + levelszameredmeny;

  document.getElementById("magassag").innerHTML = magassag;

  document.getElementById("csucsokszama3").innerHTML = T + "^i";
  document.getElementById("1csucs3").innerHTML = N1;
  document.getElementById("levelszamered").innerHTML = levelszameredmeny;
  document.getElementById("levelszamered2").innerHTML = levelszameredmeny;

  document.getElementById("szumfel").innerHTML = "logˇ" + N + "^i" + "-1";
  document.getElementById("szumfel2").innerHTML = "logˇ" + N + "^i" + "-1";

  document.getElementById("szorzatn").innerHTML = kepletn;

  document.getElementById("kiemelesutan").innerHTML = Nkeplet;

  //log szamolas es annak egyszerusitese ha lehetseges
}

export default function Rekurzios() {
  return (
    <div>
      <h1 className="test">Rekurziós fa módszer</h1>
      <div className="mesterform">
        <a>T : </a> <input type="text" id="T" className="mesterinput1"></input>
        <br />
        <a>N : </a> <input type="text" id="N" className="mesterinput1"></input>
        <Button variant="warning" onClick={szamol} className="mesterbtn">
          Megold
        </Button>
        <br />
        <a>n : </a> <input type="text" id="n" className="mesterinput1"></input>
        <br />
        <br />
      </div>
      <div className="adminsight" id="show">
        <a>
          1 csúcs költsége: <a id="1csucs"></a>
        </a>
        <br />
        <a>
          Az i-edik szinten a csúcsok száma: <a id="csucsokszama"></a>
        </a>
        <br />
        <a>Az i-edik szint összköltsége: </a>
        <a id="csucsokszama2"></a> <a></a> <a id="1csucs2"></a>
        <br />
        <a>A fa magassága: </a> <a id="famagassag"></a>
        <a> = 1</a>
        <a>
          = i = <a id="magassag"></a>
        </a>
        <br />
        <a>
          Levelek száma: <a id="levelszam"></a>
        </a>
        <br />
      </div>

      <div className="help">
        <a>
          T(n) = <a id="szumfel"></a>^Σˇ
        </a>
        <a>i=0 </a>
        <a id="csucsokszama3"></a>
        <a id="1csucs3"></a>
        <a>+</a>
        <a id="levelszamered"></a>
        <br />
        <br />
        <a>
          T(n) = <a id="szorzatn"></a>
          <a> </a>
          <a id="szumfel2"></a>^Σˇ
        </a>
        <a>i=0 </a>
        <a id="kiemelesutan"></a>
        <a>+</a>
        <a id="levelszamered2"></a>
      </div>
    </div>
  );
}
