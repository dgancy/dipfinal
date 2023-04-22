import React from "react";
import { Button } from "react-bootstrap";

function Result() {
  var megoldaskezd = document.getElementById("addarray").value.split(",");
  var ÖsszesCimlet = document.getElementById("addnumber").value;
  var Tipus = document.getElementById("type").value;

  var c = document.getElementById("tree"); //450*450
  var ctx = c.getContext("2d");

  ctx.font = "bold 18pt Georgia ";
  ctx.strokeStyle = "black";
  ctx.lineWidth = 3;
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";

  for (let i = 0; i < megoldaskezd.length; i++) {
    ctx.fillStyle = "gray";
    ctx.arc(megoldaskezd[i] * 50, 25 + i * 50, 20, 0, 2 * Math.PI); //xyr
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.fillText(megoldaskezd[i], megoldaskezd[i] * 50, 25 + i * 50);
    ctx.closePath();

    for (let j = i + 1; j <= ÖsszesCimlet; j++) {
      if (j > megoldaskezd[i] && i > 0) {
        ctx.fillStyle = "blue";
        ctx.arc(j * 50, 25 + i * 50, 20, 0, 2 * Math.PI); //xyr
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.fillText(j, j * 50, 25 + i * 50);
        ctx.closePath();
      }
    }
  }

  var solve = 0;
  var help = 0;
  if (Tipus === "ElsőFiú") {
    solve = megoldaskezd;
    help = parseInt(megoldaskezd[megoldaskezd.length - 1]);
    help = help + 1;
    solve.push(help);
  } else if (Tipus === "Apa") {
    megoldaskezd.pop();
    solve = megoldaskezd;
  } else if (Tipus === "Testvér") {
    megoldaskezd.pop();
    help = parseInt(megoldaskezd[megoldaskezd.length - 1]);
    help = help + 1;
    solve = megoldaskezd;
    solve.push(help);
  }
  document.getElementById("resolved").innerHTML =
    Tipus + " : <" + solve + " >.";

  console.log(help);
  console.log(solve);
  console.log(megoldaskezd);
  console.log(ÖsszesCimlet);
  console.log(Tipus);
}

export default function Backpropagation() {
  return (
    <form>
      <h1 className="highpad">Visszalépéses keresés</h1>
      <div class="form-group">
        <div class="container">
          <div class="row justify-content-center text-center">
            <div class="col-2">
              <b>M.o kezdemény :</b>
              <input type="text" class="form-control" id="addarray" />{" "}
              <small class="form-text text-muted">(pl.: 2,5,7)</small>
            </div>
            <div class="col-2">
              {" "}
              <b>Feladat típusa :</b>
              <select id="type" name="type" class="form-control">
                <option> </option>
                <option value="ElsőFiú">
                  ElsőFiú
                </option>
                <option value="Apa">Apa</option>
                <option value="Testvér">Testvér</option>
                <option value="Megoldás">Megoldás</option>
                <option value="LehetségesMegoldás">LehetségesMegoldás</option>
                <option value="Visszaállit">Visszaállit</option>
              </select>
            </div>
            <div class="col-2">
              {" "}
              <b>Összes címlet: </b>
              <input type="number" class="form-control" id="addnumber" />
              <small class="form-text text-muted">(pl.: 10)</small>
            </div>
          </div>
          <div class="row justify-content-center text-center">
            <Button variant="success" onClick={Result}>
              Megad
            </Button>
          </div>
        </div>
      </div>
      <div className="normalpad">
        <b id="resolved"/>
      </div>
      <div className="normalpad">
          <canvas id="tree" width={"750px"} height={"450px"}></canvas>
        </div>
    </form>
  );
}
