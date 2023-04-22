import React from "react";
import { Button } from "react-bootstrap";

var array = [];

function Rbtadd() {
  var a = document.getElementById("addnumber").value;
  array.push(a);

  var c = document.getElementById("tree"); //450*450
  var ctx = c.getContext("2d");
 // for (let i = 0; 0 < array.length; i++) {
   // if (array.length == 1) {
      ctx.arc(220, 50, 20, 0, 2 * Math.PI); //xyr
      ctx.fillStyle = "black";
      ctx.fill();
      ctx.font = "18pt Georgia";
      ctx.fillStyle = "white";
      ctx.fillText(array[0], 220, 55);
      ctx.stroke();
    //} else {
      ctx.arc(170, 125, 20, 0, 2 * Math.PI); //xyr
      ctx.fillStyle = "red";
      ctx.fill();
      ctx.font = "18pt Georgia";
      ctx.fillStyle = "white";
      ctx.fillText(array[1], 170, 130);
      ctx.stroke();
    }
  //}
//}

/*
 */

function Rbtdel() {}

export default function RedBlackTree() {
  return (
    <div className="center">
      <div>
        <h1 className="test">Piros-Fekete Fa</h1>
        <br />

        <div className="lowpad">
          <a>Elem megadása : </a>
          <input type="number" id="addnumber" className="allinput"></input>
          <a> </a>
          <a>Elem törlése : </a>
          <input type="text" id="" className="allinput"></input>
        </div>
        <div className="lowpad">
          <Button
            variant="warning"
            className="button1"
            id="btnadd"
            onClick={Rbtadd}
          >
            Megad
          </Button>
          <Button
            variant="warning"
            className="button1"
            id="btndel"
            onClick={Rbtdel}
          >
            Töröl
          </Button>
          <br />
          <br />
        </div>

        <div className="normalpad">
          <canvas id="tree" width={"450px"} height={"450px"}></canvas>
        </div>
      </div>
    </div>
  );
}
