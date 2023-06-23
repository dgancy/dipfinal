import React, { useState } from "react";
import { Button } from "react-bootstrap";

var userid = "00";

var testpaths = [];

var a_elem; //Mester
var b_elem;
var n;

var T_elem; //Rekurzios
var N_elem;
var n_rekurzios;

var bfa_array = []; //Bfa
var fokszam = 2;

var types; //BackPropagation
var kezdmo = [];
var ÖsszesCimlet;

let type; //Hash
var hossz;
var elemszam;
var numbers = [];
var numbersh2 = [];
var charakters = [];
var c1;
var c2;

var array = []; //rbtree
var direction = [];
var colors = [];
var userarray = [];
var edge;
var breaks;
var counterbreak = 0;

for (let i = 0; i < 30; i++) {
  userarray[i] = "NIL";
}
//console.log(testpaths);

function generate() {
  document.getElementById("showquests").style.display = "block";

  for (let i = 0; i < 6; i++) {
    testpaths.push(i);
  }

  for (let q = 0; q < testpaths.length; q++) {
    if (testpaths[q] == 0) {
      //Rekurzios-fa feladat
      var questone;
      var a;
      var b;
      var nsup = Math.floor(Math.random() * 4) + 1;
      n = "n" + "<sup>" + nsup + "</sup>";
      if (n == "n" + "<sup>" + 4 + "</sup>") {
        n = "nlogn";
      }
      if (n == "n" + "<sup>" + 1 + "</sup>") {
        n = "n";
      }
      a = Math.floor(Math.random() * 40) + 1;
      b = Math.floor(Math.random() * 10) + 1;
      questone = "T(n)= " + a + "T(n/" + b + ")+" + n;

      document.getElementById("questone").innerHTML =
        q +
        1 +
        ", " +
        "Oldja meg a következő feladatot Rekurziós fa módszer használatával. " +
        questone;
    } else if (testpaths[q] == 1) {
      //Mesterfeladat
      var eset = Math.floor(Math.random() * 3) + 1;
      var fea;

      var tört;
      n = "n^" + Math.floor(Math.random() * 5);
      if (n == "n^4") {
        n = "nlogn";
      }
      if (n == "n^0") {
        n = "1";
      }
      if (eset == 1) {
        a_elem = Math.floor(Math.random() * 20) + 2;
        b_elem = Math.floor(Math.random() * 10) + 1;
        if (a_elem < b_elem) {
          a_elem += 5;
        }
        fea = "T(n)= " + a_elem + "T(n/" + b_elem + ")+" + n;
      }
      if (eset == 2) {
        a_elem = Math.floor(Math.random() * 20) + 1;
        b_elem = a_elem;
        fea = "T(n)= " + a_elem + "T(" + "n/" + b_elem + ")+" + n;
      }
      if (eset == 3) {
        a_elem = Math.floor(Math.random() * 10) + 1;
        b_elem = Math.floor(Math.random() * 10) + 1;
        fea = "T(n)= " + a_elem + "T(n/" + b_elem + ")+" + n;
      }

      document.getElementById("questtwo").innerHTML =
        q +
        1 +
        ", " +
        "Oldja meg a következő feladatot Mester-tétel használatával. " +
        fea;
    } else if (testpaths[q] == 2) {
      //Bfa feladat
      var hossz = Math.floor(Math.random() * 3) + 10;
      var input = document.getElementById("generate");

      for (let j = 0; j < hossz; j++) {
        bfa_array.push(Math.floor(Math.random() * 100));
      }

      for (let i = 0; i < 7; i++) {
        if (i === 0 || i === 2) {
          input.innerHTML +=
            ' <input type="text" name="' +
            i +
            '"  className="normalpad" size="2" id="inp' +
            i +
            '">    <br/><br/>    ';
        } else if (i === 1) {
          input.innerHTML +=
            ' <input type="text" name="' +
            i +
            '"  className="normalpad" size="2" id="inp' +
            i +
            '">    <a> </a>    ';
        } else {
          input.innerHTML +=
            ' <input type="text" name="' +
            i +
            '"  className="allinput" size="2" id="inp' +
            i +
            '">';
        }
      }
      document.getElementById("questthird").innerHTML =
        q +
        1 +
        ", " +
        "Adott az alábbi B-fa, amelynek minimális fokszáma " +
        fokszam +
        ". A következő számsoron alkalmazza a tanultakat. " +
        " " +
        " [ " +
        bfa_array +
        " ].";

      document.getElementById("inp1").style.marginRight = "35px";
      document.getElementById("inp2").style.marginLeft = "35px";
    } else if (testpaths[q] == 3) {
      //BackPropagation feladat
      types = Math.floor(Math.random() * 3);
      if (types === 0) {
        types = "ElsőFiú";
      } else if (types === 1) {
        types = "Testvér";
      } else if (types === 2) {
        types = "Apa";
      } else if (types === 3) {
        types = "Megoldás";
      } else if (types === 4) {
        types = "LehetségesMegoldás";
      } else if (types === 5) {
        types = "Visszaállit";
      }
      ÖsszesCimlet = Math.floor(Math.random() * 10) + 1;

      var number = Math.floor(Math.random() * 3) + 1;
      for (let i = 0; i <= number; i++) {
        kezdmo.push(Math.floor(Math.random() * 9) + 1 + "");
      }
      var k = 100;
      var input_back = document.getElementById("generate-back");

      input_back.innerHTML +=
        types +
        ": " +
        ' <input type="text" name="' +
        k +
        '"  className="normalpad" size="2" id="inp' +
        k +
        '">    <br/>   ';
      kezdmo.sort();
      document.getElementById("questfour").innerHTML =
        q +
        1 +
        ", " +
        "Visszalépéses keresést alkalmazunk a pénzváltás problémára. Egy megoldáskezdemény áll rendelkezésünkre: < " +
        kezdmo +
        " > <br/> Összesen " +
        ÖsszesCimlet +
        " címlet van. Adja meg az alábbi művelete eredményét. <br/> <br/>";
    } else if (testpaths[q] == 4) {
      var hossz = Math.floor(Math.random() * 3) + 10;
      for (let i = 0; i < hossz; i++) {
        array.push(Math.floor(Math.random() * 100));
      }
      document.getElementById("questsix").innerHTML =
        q +
        1 +
        ", " +
        "Oldja meg a piros-fekete fa használtával a feladatot, a következő adatsorra: " +
        "[ " +
        array +
        " ].";
    } else if (testpaths[q] == 5) {
      //Hash
      var chars = "QWERTZUIOPLKJHGFDSAYXCVBNM";
      var h1 = "";
      var különbözet = 0;
      const tblBody = document.createElement("tbody");
      const tbl = document.createElement("table");
      var input_hash = document.getElementById("generate-hash");
      hossz = Math.floor(Math.random() * 10) + 5;
      elemszam = Math.floor(Math.random() * 5) + 3;
      var cs = hossz * 70;

      type = Math.floor(Math.random() * 100) % 4;

      if (type === 0) {
        type = "simple";
      } else if (type === 1) {
        type = "lineal";
      } else if (type === 2) {
        type = "square";
      } else if (type === 3) {
        type = "double";
      }

      if (elemszam >= hossz) {
        különbözet = elemszam - hossz + 2;
        elemszam -= különbözet;
      } else if (elemszam < hossz / 2) {
        elemszam += 1;
      }
      for (let i = 0; i < elemszam; i++) {
        numbers.push(Math.floor(Math.random() * 100));
        numbersh2.push(Math.floor(Math.random() * 100));
        charakters.push(chars.charAt(Math.floor(Math.random() * 26)));
      }

      if (type === "simple" || type === "lineal") {
        for (let i = 0; i < elemszam; i++) {
          if (i === elemszam) {
            h1 += "h1:( " + charakters[i] + " ) = " + numbers[i] + " ";
          }
          h1 += "h1:( " + charakters[i] + " ) = " + numbers[i] + ", ";
        }
        document.getElementById("questfive").innerHTML =
          q +
          1 +
          ", " +
          "Szúrja be egy " +
          hossz +
          " hosszúságú hash táblába a következő objektumokat " +
          type +
          " hasítás alkalmazásával.";
        document.getElementById("h").innerHTML = h1 + " .";
      } else if (type === "square") {
        var oneortwo = Math.floor(Math.random() * 1);
        if (oneortwo === 0) {
          c1 = "c1 = " + 1;
          c2 = "c2 = " + 1;
        } else {
          c1 = "c1 = " + 1;
          c2 = "c2 = " + 2;
        }
        for (let i = 0; i < elemszam; i++) {
          if (i === elemszam) {
            h1 += "h1:( " + charakters[i] + " ) = " + numbers[i] + " ";
          }
          h1 += "h1:( " + charakters[i] + " ) = " + numbers[i] + ", ";
        }
        document.getElementById("questfive").innerHTML =
          q +
          1 +
          ", " +
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
      } else if (type === "double") {
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
        document.getElementById("questfive").innerHTML =
          q +
          1 +
          ", " +
          "Szúrja be egy " +
          hossz +
          " hosszúságú hash táblába a következő objektumokat " +
          type +
          " hasítás alkalmazásával.";
        document.getElementById("h").innerHTML = h1 + " .";
      }

      for (let j = 0; j < hossz; j++) {
        input_hash.innerHTML +=
          '<input type="text" placeholder="' +
          j +
          '" name="' +
          j +
          '" size="4" id="inp' +
          j +
          '" className="center">';
      }
      return charakters, type, hossz, elemszam;
    }
    document.getElementById("btngen").disabled = true;
  }

  //import other pages
}

function Balrahalad() {
  if (direction.length < 4) {
    direction.push("balra");
    document.getElementById("position").innerHTML = " " + direction + " ";
  }
}
function Jobbrahalad() {
  if (direction.length < 4) {
    direction.push("jobbra");
    document.getElementById("position").innerHTML = " " + direction + " ";
  }
}
function Visszavon() {
  if (direction.length != 0) {
    direction.pop();
    document.getElementById("position").innerHTML = " " + direction + " ";
  }
}

function Kirajzol() {
  console.log("new");
  var element = document.getElementById("element").value;
  var color;
  if (document.getElementById("check-red").checked) {
    color = "red";
    colors.push(color);
  } else if (document.getElementById("check-black").checked) {
    color = "black";
    colors.push(color);
  }

  const divelement = document.createElement("b");

  if (color == "red") {
    divelement.classList.add("tree-red");
  } else if (color == "black") {
    divelement.classList.add("tree-black");
  }
  breaks = document.createElement("br");

  if (direction.length == 0 && userarray[0] == "NIL") {
    userarray[0] = element;
  }
  if (direction.length == 1) {
    if (counterbreak == 0) {
      document.getElementById("final").appendChild(breaks);
      counterbreak++;
    }
    if (direction[0] == "balra" && userarray[1] == "NIL") {
      userarray[1] = element;
    } else if (direction[0] == "jobbra" && userarray[2] == "NIL") {
      userarray[2] = element;
    }
  } else if (direction.length == 2) {
    if (counterbreak == 1) {
      document.getElementById("final").appendChild(breaks);
      counterbreak++;
    }
    if (
      direction[0] == "balra" &&
      direction[1] == "balra" &&
      userarray[3] == "NIL"
    ) {
      userarray[3] = element;
    } else if (
      direction[0] == "balra" &&
      direction[1] == "jobbra" &&
      userarray[4] == "NIL"
    ) {
      userarray[4] = element;
    } else if (
      direction[0] == "jobbra" &&
      direction[1] == "balra" &&
      userarray[5] == "NIL"
    ) {
      userarray[5] = element;
    } else if (
      direction[0] == "jobbra" &&
      direction[1] == "jobbra" &&
      userarray[6] == "NIL"
    ) {
      userarray[6] = element;
    }
  } else if (direction.length == 3) {
    if (counterbreak == 2) {
      document.getElementById("final").appendChild(breaks);
      counterbreak++;
    }
    if (
      direction[0] == "balra" &&
      direction[1] == "balra" &&
      direction[2] == "balra" &&
      userarray[7] == "NIL"
    ) {
      userarray[7] = element;
    } else if (
      direction[0] == "balra" &&
      direction[1] == "balra" &&
      direction[2] == "jobbra" &&
      userarray[8] == "NIL"
    ) {
      userarray[8] = element;
    } else if (
      direction[0] == "balra" &&
      direction[1] == "jobbra" &&
      direction[2] == "balra" &&
      userarray[9] == "NIL"
    ) {
      userarray[9] = element;
    } else if (
      direction[0] == "balra" &&
      direction[1] == "jobbra" &&
      direction[2] == "jobbra" &&
      userarray[10] == "NIL"
    ) {
      userarray[10] = element;
    } else if (
      direction[0] == "jobbra" &&
      direction[1] == "balra" &&
      direction[2] == "balra" &&
      userarray[11] == "NIL"
    ) {
      userarray[11] = element;
    } else if (
      direction[0] == "jobbra" &&
      direction[1] == "balra" &&
      direction[2] == "jobbra" &&
      userarray[12] == "NIL"
    ) {
      userarray[12] = element;
    } else if (
      direction[0] == "jobbra" &&
      direction[1] == "jobbra" &&
      direction[2] == "balra" &&
      userarray[13] == "NIL"
    ) {
      userarray[13] = element;
    } else if (
      direction[0] == "jobbra" &&
      direction[1] == "jobbra" &&
      direction[2] == "jobbra" &&
      userarray[14] == "NIL"
    ) {
      userarray[14] = element;
    }
  } else if (direction.length == 4) {
    if (counterbreak == 3) {
      document.getElementById("final").appendChild(breaks);
      counterbreak++;
    }
    if (
      direction[0] == "balra" &&
      direction[1] == "balra" &&
      direction[2] == "balra" &&
      direction[3] == "balra" &&
      userarray[15] == "NIL"
    ) {
      userarray[15] = element;
    } else if (
      direction[0] == "balra" &&
      direction[1] == "balra" &&
      direction[2] == "balra" &&
      direction[3] == "jobbra" &&
      userarray[16] == "NIL"
    ) {
      userarray[16] = element;
    } else if (
      direction[0] == "balra" &&
      direction[1] == "balra" &&
      direction[2] == "jobbra" &&
      direction[3] == "balra" &&
      userarray[17] == "NIL"
    ) {
      userarray[17] = element;
    } else if (
      direction[0] == "balra" &&
      direction[1] == "balra" &&
      direction[2] == "jobbra" &&
      direction[3] == "jobbra" &&
      userarray[18] == "NIL"
    ) {
      userarray[18] = element;
    } else if (
      direction[0] == "balra" &&
      direction[1] == "jobbra" &&
      direction[2] == "balra" &&
      direction[3] == "balra" &&
      userarray[19] == "NIL"
    ) {
      userarray[19] = element;
    } else if (
      direction[0] == "balra" &&
      direction[1] == "jobbra" &&
      direction[2] == "balra" &&
      direction[3] == "jobbra" &&
      userarray[20] == "NIL"
    ) {
      userarray[20] = element;
    } else if (
      direction[0] == "balra" &&
      direction[1] == "jobbra" &&
      direction[2] == "jobbra" &&
      direction[3] == "balra" &&
      userarray[21] == "NIL"
    ) {
      userarray[21] = element;
    } else if (
      direction[0] == "balra" &&
      direction[1] == "jobbra" &&
      direction[2] == "jobbra" &&
      direction[3] == "jobbra" &&
      userarray[22] == "NIL"
    ) {
      userarray[22] = element;
    } else if (
      direction[0] == "jobbra" &&
      direction[1] == "balra" &&
      direction[2] == "balra" &&
      direction[3] == "balra" &&
      userarray[23] == "NIL"
    ) {
      userarray[23] = element;
    } else if (
      direction[0] == "jobbra" &&
      direction[1] == "balra" &&
      direction[2] == "balra" &&
      direction[3] == "jobbra" &&
      userarray[24] == "NIL"
    ) {
      userarray[24] = element;
    } else if (
      direction[0] == "jobbra" &&
      direction[1] == "balra" &&
      direction[2] == "jobbra" &&
      direction[3] == "balra" &&
      userarray[24] == "NIL"
    ) {
      userarray[24] = element;
    }
  } else if (
    direction[0] == "jobbra" &&
    direction[1] == "balra" &&
    direction[2] == "jobbra" &&
    direction[3] == "jobbra" &&
    userarray[25] == "NIL"
  ) {
    userarray[25] = element;
  } else if (
    direction[0] == "jobbra" &&
    direction[1] == "jobbra" &&
    direction[2] == "balra" &&
    direction[3] == "balra" &&
    userarray[26] == "NIL"
  ) {
    userarray[26] = element;
  } else if (
    direction[0] == "jobbra" &&
    direction[1] == "jobbra" &&
    direction[2] == "balra" &&
    direction[3] == "jobbra" &&
    userarray[27] == "NIL"
  ) {
    userarray[27] = element;
  } else if (
    direction[0] == "jobbra" &&
    direction[1] == "jobbra" &&
    direction[2] == "jobbra" &&
    direction[3] == "balra" &&
    userarray[28] == "NIL"
  ) {
    userarray[28] = element;
  } else if (
    direction[0] == "jobbra" &&
    direction[1] == "jobbra" &&
    direction[2] == "jobbra" &&
    direction[3] == "jobbra" &&
    userarray[29] == "NIL"
  ) {
    userarray[29] = element;
  }

  divelement.textContent = element;
  divelement.id = "element" + array.length;
  const final = document.getElementById("final");
  final.appendChild(divelement);

  document.getElementById("element").value = "";
  document.getElementById("check-black").checked = false;
  document.getElementById("check-red").checked = false;
  direction = [];
}

var allmistakes = [];

function FinalCheck() {
  var user_a_element = document.getElementById("quest2-a-elem").value; //Mestercheck
  var user_b_element = document.getElementById("quest2-b-elem").value;
  var user_n_element = document.getElementById("quest2-f(n)-elem").value;
  var user_eset = document.getElementById("type").value;
  var user_E_element = document.getElementById(
    "quest2-E-kiegeszito-erteke"
  ).value;
  var user_master_result = document.getElementById("quest2-final").value;
  var mistakes_mester = [];

  let nlog = (Math.log(a_elem) / Math.log(b_elem)).toFixed(3);
  let e = 0;
  var eset;
  if (nlog < 1) {
    e = 1 - nlog;
  } else {
    e = nlog - 1;
  }
  if (nlog < 2 && nlog > 1 && n == "n2") {
    e = 2 - nlog;
  }

  if (
    (nlog == 0 && n == "n") ||
    (nlog == 1 && n == "n") ||
    (nlog == 2 && n == "n2") ||
    n == "1"
  ) {
    eset = 2;
  }
  if (nlog > 1 && nlog - e == 1 && n == "n") {
    eset = 1;
  }
  if (nlog > 2 && n == "n2") {
    eset = 1;
    e -= 1;
  }

  if (nlog < 1 && nlog + e == 1 && n == "n") {
    eset = 3;
  }
  if (nlog < 1 || (nlog == 1 && n == "n2")) {
    eset = 3;
    e += 1;
  }
  if (nlog < 2 && n == "n2" && nlog > 1) {
    eset = 3;
  }

  if (
    user_a_element != a_elem ||
    user_b_element != b_elem ||
    user_n_element != n
  ) {
    mistakes_mester.push("2. -es feladat: Hibás leolvasás!");
    allmistakes.push(userid + "0100");
  }
  if (user_eset != eset || user_E_element != e) {
    mistakes_mester.push("2. -es feladat: Hibás eset választás!");
    allmistakes.push(userid + "0101");
  }
  if (user_master_result != n) {
    mistakes_mester.push("2. -es feladat: Hibás eredmény!");
    allmistakes.push(userid + "0102");
  }
  document.getElementById("final-questtwo-0").innerHTML = mistakes_mester[0];
  document.getElementById("final-questtwo-1").innerHTML = mistakes_mester[1];
  document.getElementById("final-questtwo-2").innerHTML = mistakes_mester[2];

  var user_T_element = document.getElementById("quest1-T-elem").value; //Rekurzios
  var user_N_element = document.getElementById("quest1-N-elem").value;
  var user_n_element = document.getElementById("quest1-f(n)-elem").value;

  var user_1edge_element = document.getElementById("quest1-1-csucs").value;
  var user_edge_number = document.getElementById("quest1-csucsszam").value;
  var user_all_cost = document.getElementById("quest1-szintkoltseg").value;
  var user_tree_high = document.getElementById("quest1-famagassaga").value;
  var user_leaf_number = document.getElementById("quest1-levelekszama").value;

  var one_edge_element = "n/" + N_elem + "^i";
  var magassag = "log" + N_elem + "n";
  var levelszameredmeny = "n" + "log" + N_elem + " " + T_elem;
  var one_edge_element_result;
  var edge_number = T_elem + "^i";
  var all_cost = "n/" + N_elem + "^i*" + edge_number;
  if (n_rekurzios === "n") {
    one_edge_element_result = one_edge_element;
  }
  if (n_rekurzios === "n2") {
    one_edge_element_result = "(" + one_edge_element + ")^2";
  }
  if (n_rekurzios === "n3") {
    one_edge_element_result = "(" + one_edge_element + ")^3";
  }
  if (n_rekurzios === "n4") {
    one_edge_element_result = "(" + one_edge_element + ")^4";
  }
  if (n_rekurzios === "n5") {
    one_edge_element_result = "(" + one_edge_element + ")^5";
  }

  var mistakes_recursion_tree = [];
  if (
    user_T_element != T_elem ||
    user_N_element != N_elem ||
    user_n_element != n_rekurzios
  ) {
    mistakes_recursion_tree.push("1. -es feladat: Hibás leolvasás!");
    allmistakes.push(userid + "0000");
  }
  if (
    user_1edge_element != one_edge_element_result ||
    user_edge_number != edge_number
  ) {
    mistakes_recursion_tree.push("1. -es feladat: Hibás helyettesítés!");
    allmistakes.push(userid + "0001");
  }
  if (user_all_cost != all_cost || user_tree_high != magassag) {
    mistakes_recursion_tree.push("1. -es feladat: Hibás helyettesítés!");
    allmistakes.push(userid + "0002");
  }
  if (user_leaf_number != levelszameredmeny) {
    mistakes_recursion_tree.push("1. -es feladat: Hibás eredmény!");
    allmistakes.push(userid + "0003");
  }
  console.log(mistakes_recursion_tree);
  document.getElementById("final-quest-one-0").innerHTML =
    mistakes_recursion_tree[0];
  document.getElementById("final-quest-one-1").innerHTML =
    mistakes_recursion_tree[1];
  document.getElementById("final-quest-one-2").innerHTML =
    mistakes_recursion_tree[2];
  document.getElementById("final-quest-one-3").innerHTML =
    mistakes_recursion_tree[3];

  var edgearray = [];
  edgearray = document.getElementById("inp0").value.split(",");
  var leftarrayone = [];
  leftarrayone = document.getElementById("inp1").value.split(",");
  var leftarraytwo = [];
  leftarraytwo = document.getElementById("inp3").value.split(",");
  var leftarraythree = [];
  leftarraythree = document.getElementById("inp4").value.split(",");

  var rightarrayone = [];
  rightarrayone = document.getElementById("inp2").value.split(",");
  var rightarraytwo = [];
  rightarraytwo = document.getElementById("inp5").value.split(",");
  var rightarraythree = [];
  rightarraythree = document.getElementById("inp6").value.split(",");

  parseInt(edgearray);

  var Change = [];
  var edgemax = 2 * fokszam - 2;
  var state = 0;

  var OutputArrayEdge = [];
  var OutputArrayRight_1 = [];
  var OutputArrayLeft_1 = [];
  var OutputArrayRight_2 = [];
  var OutputArrayLeft_2 = [];
  var OutputArrayMiddle_1 = [];
  var OutputArrayMiddle_2 = [];

  for (let i = 0; i < array.length; i++) {
    if (i < 3) {
      if (i < edgemax) {
        OutputArrayEdge.push(array[i]);
      } else if ((i = edgemax)) {
        OutputArrayEdge.push(array[i]);
        OutputArrayEdge.sort();
        Change.push(OutputArrayEdge[edgemax - 1]);
        OutputArrayLeft_1.push(OutputArrayEdge[0]);
        OutputArrayRight_1.push(OutputArrayEdge[edgemax]);
        OutputArrayEdge = Change;
      }
    } else {
      if (
        array[i] > OutputArrayEdge[0] &&
        array[i] < OutputArrayEdge[OutputArrayEdge.length] &&
        OutputArrayEdge.length > 1
      ) {
        OutputArrayMiddle_1.push(array[i]);
      }
      if (
        OutputArrayLeft_1.length < edgemax + 1 &&
        OutputArrayRight_1.length < edgemax + 1 &&
        state == 0
      ) {
        if (array[i] > OutputArrayEdge[OutputArrayEdge.length - 1]) {
          OutputArrayRight_1.push(array[i]);
          OutputArrayRight_1.sort();
        } else if (array[i] < OutputArrayEdge[0] && state == 0) {
          OutputArrayLeft_1.push(array[i]);
          OutputArrayLeft_1.sort();
        }
      }
    }
    if (OutputArrayLeft_1.length > edgemax) {
      Change = OutputArrayLeft_1.splice(edgemax - 1, 1);
      OutputArrayEdge.push(Change);
      Change = OutputArrayLeft_1.splice(edgemax - 1, 1);
      OutputArrayMiddle_1.push(Change);
      OutputArrayEdge.sort();
      OutputArrayMiddle_1.sort();
    }
    if (OutputArrayRight_1.length > edgemax) {
      Change = OutputArrayRight_1.splice(edgemax - 1, 1);
      OutputArrayEdge.push(Change);
      Change = OutputArrayRight_1.splice(0, 1);
      OutputArrayMiddle_1.push(Change);
      OutputArrayEdge.sort();
      OutputArrayMiddle_1.sort();
    }
    if (OutputArrayEdge.length == edgemax + 1) {
      for (let k = 0; k < 2; k++) {
        if (
          OutputArrayRight_1[k] > OutputArrayEdge[OutputArrayEdge.length - 1] &&
          OutputArrayRight_1[0] != " "
        ) {
          OutputArrayRight_2.push(OutputArrayRight_1[k]);
          OutputArrayRight_1.shift();
        } else if (
          OutputArrayRight_1[k] < OutputArrayEdge[OutputArrayEdge.length - 1] &&
          OutputArrayRight_1[0] != " "
        ) {
          OutputArrayMiddle_2.push(OutputArrayRight_1[k]);
          OutputArrayRight_1.shift();
        } else if (
          OutputArrayLeft_1[k] > OutputArrayEdge[0] &&
          OutputArrayLeft_1[0] != " "
        ) {
          OutputArrayMiddle_1.push(OutputArrayLeft_1[k]);
          OutputArrayLeft_1.shift();
        } else if (
          OutputArrayLeft_1[k] < OutputArrayEdge[0] &&
          OutputArrayLeft_1[0] != " "
        ) {
          OutputArrayLeft_2.push(OutputArrayLeft_1[k]);
          OutputArrayLeft_1.shift();
        }
      }
      if (OutputArrayEdge.length == edgemax + 1) {
        OutputArrayLeft_1.push(OutputArrayEdge[0]);
        OutputArrayRight_1.push(OutputArrayEdge[OutputArrayEdge.length - 1]);

        OutputArrayEdge.pop();
        OutputArrayEdge.shift();
      }

      state = 1;
    }
    if (state == 1) {
      if (array[i] < OutputArrayLeft_1[0] && array[i] < OutputArrayEdge[0]) {
        OutputArrayLeft_2.push(array[i]);
        OutputArrayLeft_2.sort();
      } else if (
        array[i] > OutputArrayLeft_1[OutputArrayLeft_1.length - 1] &&
        array[i] < OutputArrayEdge[0]
      ) {
        OutputArrayMiddle_1.push(array[i]);
        OutputArrayMiddle_1.sort();
      } else if (
        array[i] < OutputArrayRight_1[0] &&
        array[i] > OutputArrayEdge[OutputArrayEdge.length - 1]
      ) {
        OutputArrayMiddle_2.push(array[i]);
        OutputArrayMiddle_2.sort();
      } else if (
        array[i] < OutputArrayRight_1[OutputArrayRight_1.length - 1] &&
        array[i] > OutputArrayEdge[OutputArrayEdge.length - 1]
      ) {
        OutputArrayRight_2.push(array[i]);
        OutputArrayRight_2.sort();
      }

      if (
        OutputArrayLeft_1[1] != " " &&
        OutputArrayLeft_2.length < edgemax &&
        OutputArrayLeft_1.length > 1
      ) {
        OutputArrayLeft_2.push(OutputArrayLeft_1[0]);
        OutputArrayLeft_1.shift();
      } else if (
        OutputArrayLeft_1[1] != " " &&
        OutputArrayMiddle_1.length < edgemax &&
        OutputArrayLeft_1.length > 1
      ) {
        OutputArrayMiddle_1.push(
          OutputArrayLeft_1[OutputArrayLeft_1.length - 1]
        );
        OutputArrayLeft_1.pop();
      }
      OutputArrayLeft_1.sort();
      OutputArrayLeft_2.sort();

      if (
        OutputArrayRight_1[1] != " " &&
        OutputArrayRight_2.length < edgemax &&
        OutputArrayRight_1.length > 1
      ) {
        OutputArrayRight_2.push(
          OutputArrayRight_1[OutputArrayRight_1.length - 1]
        );
        OutputArrayRight_1.pop();
      } else if (
        OutputArrayRight_1[1] != " " &&
        OutputArrayMiddle_2.length < edgemax &&
        OutputArrayRight_1.length > 1
      ) {
        OutputArrayMiddle_2.push(OutputArrayRight_1[0]);
        OutputArrayRight_1.shift();
      }

      OutputArrayRight_1.sort();
      OutputArrayMiddle_2.sort();
    }
  }
  for (let m = 0; m < OutputArrayMiddle_1.length; m++) {
    if (OutputArrayMiddle_1[m] > OutputArrayEdge[0]) {
      OutputArrayMiddle_2.push(OutputArrayMiddle_1[m]);
      OutputArrayMiddle_1.splice(m, OutputArrayMiddle_1.length);
    }
  }
  for (let m = 0; m < OutputArrayMiddle_2.length; m++) {
    if (OutputArrayMiddle_2[m] < OutputArrayEdge[OutputArrayEdge.length]) {
      OutputArrayMiddle_1.push(OutputArrayMiddle_2[m]);
      OutputArrayMiddle_1.splice(m, OutputArrayMiddle_1.length);
    }
  }
  OutputArrayEdge.sort();
  OutputArrayRight_1.sort();
  OutputArrayLeft_1.sort();
  OutputArrayRight_2.sort();
  OutputArrayLeft_2.sort();
  OutputArrayMiddle_1.sort();
  OutputArrayMiddle_2.sort();

  parseInt(edgearray);

  var points = 0;
  for (let i = 0; i < OutputArrayEdge.length; i++) {
    if (edgearray[i] == OutputArrayEdge[i]) {
      points += 1;
    }
  }
  for (let i = 0; i < OutputArrayLeft_1.length; i++) {
    if (leftarrayone[i] == OutputArrayLeft_1[i]) {
      points += 1;
    }
  }
  for (let i = 0; i < OutputArrayLeft_2.length; i++) {
    if (leftarraytwo[i] == OutputArrayLeft_2[i]) {
      points += 1;
    }
  }
  for (let i = 0; i < OutputArrayMiddle_1.length; i++) {
    if (leftarraythree[i] == OutputArrayMiddle_1[i]) {
      points += 1;
    }
  }
  for (let i = 0; i < OutputArrayMiddle_1.length; i++) {
    if (rightarraytwo[i] == OutputArrayMiddle_1[i]) {
      points += 1;
    }
  }
  for (let i = 0; i < OutputArrayRight_1.length; i++) {
    if (rightarrayone[i] == OutputArrayRight_1[i]) {
      points += 1;
    }
  }
  for (let i = 0; i < OutputArrayRight_2.length; i++) {
    if (rightarraythree[i] == OutputArrayRight_2[i]) {
      points += 1;
    }
  }
  console.log(points);

  if (points == array.length && points != 0) {
    {
      document.getElementById("final-questthree-0").innerHTML =
        "3. -as feladata: Jó megoldás!";
    }
  } else {
    document.getElementById("final-questthree-0").innerHTML =
      "3. -as feladata: Hibás megoldás!";
    allmistakes.push(userid + "0200");
  }

  var userresult = []; //Backpropagation
  userresult = document.getElementById("inp100").value.split(",");
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

  if (point === solve.length) {
    document.getElementById("final-quest-four").innerHTML =
      "4.-es feladat: Jó megoldás!";
  } else {
    document.getElementById("final-quest-four").innerHTML =
      "4.-es feladat: Hibás megoldás!";
    allmistakes.push(userid + "0300");
  }

  var leftover; //Hash
  var arrayfinal = [];

  for (let j = 0; j < hossz; j++) {
    arrayfinal[j] = " ";
  }

  if (type === "simple") {
    for (let j = 0; j < elemszam; j++) {
      leftover = numbers[j] % hossz;
      if (arrayfinal[leftover] === " ") {
        arrayfinal[leftover] = charakters[j];
      } else {
        arrayfinal[leftover] += charakters[j];
      }
    }
  }
  if (type === "lineal") {
    for (let j = 0; j < elemszam; j++) {
      leftover = numbers[j] % hossz;
      if (arrayfinal[leftover] === " ") {
        arrayfinal[leftover] = charakters[j];
      } else {
        arrayfinal[leftover + 1] = charakters[j];
      }
    }
  }
  if (type === "double") {
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
  if (type === "square") {
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
    document.getElementById("final-quest-five").innerHTML =
      "6.-os feladat: Jó megoldás!";
  } else {
    document.getElementById("final-quest-five").innerHTML =
      "6.-oes feladat: Hibás megoldás!";
    allmistakes.push(userid + "0500");
  }

  var errorColor = "Jó megoldás";
  var errorNumbers = "Jó megoldás";
  if (colors[0] == "red") {
    errorColor = "Hibás megolodás, hiba oka: Hibás szinzés";
  }
  if (colors.length > 3) {
    if (colors[0] == "black" && colors[1] == "black") {
      if (colors[3] == "black" || colors[4] == "black") {
        errorColor = "Hibás megolodás, hiba oka: Hibás szinzés";
      }
    } else if (colors[2] == "black") {
      if (colors[5] == "black" || colors[6] == "black") {
        errorColor = "Hibás megolodás, hiba oka: Hibás szinzés";
      }
    }
    if (colors[1] == "black") {
      if (colors[3] == "black") {
        if (colors[7] == "black" || colors[8] == "black") {
          errorColor = "Hibás megolodás, hiba oka: Hibás szinzés";
        }
      } else if (colors[4] == "black") {
        if (colors[9] == "black" || colors[10] == "black") {
          errorColor = "Hibás megolodás, hiba oka: Hibás szinzés";
        }
      }
    }

    if (colors[2] == "black") {
      if (colors[5] == "black") {
        if (colors[11] == "black" || colors[12] == "black") {
          errorColor = "Hibás megolodás, hiba oka: Hibás szinzés";
        }
      } else if (colors[6] == "black") {
        if (colors[13] == "black" || colors[14] == "black") {
          errorColor = "Hibás megolodás, hiba oka: Hibás szinzés";
        }
      }
    }

    for (let i = 0; i < 14; i++) {
      if (
        userarray[i] > userarray[i * i + 1] &&
        userarray[i] < userarray[i * 2 + 2]
      ) {
      } else {
        errorNumbers = "Hibás megolodás, hiba oka: Hibás számsor";
      }
    }
    if (colors.length < 3 || userarray.length < 3) {
      errorNumbers = "Nincs kitöltve";
      errorColor = "Nincs kitöltve";
    }
    if (errorColor == "Jó megoldás" && errorNumbers == "Jó megoldás") {
      document.getElementById("final-quest-five").innerHTML = "Jó megoldás";
    } else if (errorColor != "Jó megoldás" && errorNumbers == "Jó megoldás") {
      document.getElementById("final-quest-five").innerHTML =
        "5.-ös feladat: Szín hiba, rossz megoldás";
      allmistakes.push(userid + "0500");
    } else if (errorColor == "Jó megoldás" && errorNumbers != "Jó megoldás") {
      document.getElementById("final-quest-five").innerHTML =
        "5.-ös feladat: Számsor hiba, rossz megoldás";
      allmistakes.push(userid + "0501");
    } else if (
      (errorColor != "Jó megoldás" &&
        errorNumbers != "Jó megoldás" &&
        errorNumbers != "Nincs kitöltve") ||
      errorColor != "Nincs kitöltve"
    ) {
      document.getElementById("final-quest-five").innerHTML =
        "5.-ös feladat: Több hiba, rossz megoldás";
      allmistakes.push(userid + "0502");
    }
  }
}
export default function Test() {

  const [data, setData] = useState({
    getuserid: "",
  });
  
  const { getuserid } = data;
  
  const send = () => {
    const result = fetch(`http://localhost:80/ID/email/:email/${getuserid}`, {
      method: "GET",
      // mode: "cors",
      headers: {
        "Content-Type": "text/plain",
      },
    });
    result.then((value) => {
      value.json().then((res) => {
        console.log(res);
        userid = res;
      });
    });
  };

  return (
    <form>
      <div className="test">
        <h2>Teszt</h2>
        <Button
          variant="success"
          className="btn"
          id="btngen"
          onClick={generate}
        >
          Teszt feladatsor készítés
        </Button>
        <div class="form-group" id="showquests" className="hidden">
          <div className="normalpad">
            <div className="lowpad" id="questone"></div>
            <div class="container" className="normalpad">
              <div class="row justify-content-center text-center">
                <div class="col-2">
                  <div className="normalpad">
                    <b>T-értéke :</b>{" "}
                    <input
                      type="text"
                      class="form-control"
                      id="quest1-T-elem"
                    ></input>
                  </div>
                </div>
                <div class="col-2">
                  <div className="normalpad">
                    <b> N-értéke: </b>
                    <input
                      type="text"
                      class="form-control"
                      id="quest1-N-elem"
                    ></input>
                  </div>
                </div>
                <div class="col-2">
                  <div className="normalpad">
                    <b> n-értéke:</b>
                    <input
                      type="text"
                      class="form-control"
                      id="quest1-f(n)-elem"
                    ></input>
                  </div>
                </div>
              </div>

              <div class="row justify-content-center text-center">
                <div class="col-3">
                  <b> i-ik szint, csúcs költsége: </b>
                  <input
                    type="text"
                    class="form-control"
                    id="quest1-1-csucs"
                  ></input>
                </div>
                <div class="col-4" className="normalpad">
                  <b> Az i-edik szint csúcsainak száma:</b>
                  <input
                    type="text"
                    class="form-control"
                    id="quest1-csucsszam"
                  ></input>
                </div>
              </div>
              <div class="row justify-content-center text-center">
                <div class="col-3">
                  <div className="normalpad">
                    <b> Az i-edik szint összköltsége:</b>
                    <input
                      type="text"
                      class="form-control"
                      id="quest1-szintkoltseg"
                    ></input>
                  </div>
                </div>
                <div class="col-2">
                  <div className="normalpad">
                    <b> A fa magassága:</b>
                    <input
                      type="text"
                      class="form-control"
                      id="quest1-famagassaga"
                    ></input>
                  </div>
                </div>
                <div class="col-2">
                  <div className="normalpad">
                    <b> Levelek száma:</b>
                    <input
                      type="text"
                      class="form-control"
                      id="quest1-levelekszama"
                    ></input>
                  </div>
                </div>
              </div>
            </div>

            <div className="normalpad" class="form-group">
              <div className="normalpad" id="questtwo"></div>
              <div class="container ">
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
              </div>
            </div>

            <div className="normalpad" id="questthird"></div>
            <div className="normalpad" id="generate">
              {" "}
            </div>

            <div className="normalpad" id="questfour"></div>
            <div id="generate-back" className="normalpad">
              {" "}
            </div>

            <div className="lowpad" id="questsix"></div>
            <div id="generate-rbtree">
              <b>Érték: </b>
              <input type="number" id="element"></input>
              <div>
                <input type="checkbox" id="check-black" />
                <label>Black</label>
                <input type="checkbox" id="check-red" />
                <label>Red</label>
              </div>
              <br />
              <Button variant="success" onClick={Balrahalad}>
                Balra Megy
              </Button>
              <Button variant="success" onClick={Jobbrahalad}>
                Jobbra Megy
              </Button>
              <Button variant="success" onClick={Visszavon}>
                Visszavon
              </Button>
              <br />
              <Button variant="success" onClick={Kirajzol}>
                Kirajzol
              </Button>
              <br />
              <br />
              <div className="normalpad">
                <b>Aktuális pozíció: </b>
                <b id="position" />
              </div>
              <div className="highpad">
                <b id="final"></b>
              </div>
            </div>

            <div className="normalpad" id="questfive"></div>
            <div className="normalpad" id="generate-hash"></div>
            <div id="h" className="highpad"></div>
            <div>
              <div id="tbl" className="lowpad"></div>
              <div id="gen" className="lowpad"></div>
            </div>
          </div>

          <div className="highpad">
            <Button
              variant="success"
              className="testbutton"
              onClick={FinalCheck}
            >
              Leadom
            </Button>
          </div>
        </div>
        <div className="lowpad">
          <div className="normalpad" id="final-quest-one-0"></div>
          <div className="normalpad" id="final-quest-one-1"></div>
          <div className="normalpad" id="final-quest-one-2"></div>
          <div className="normalpad" id="final-quest-one-3"></div>

          <div className="normalpad" id="final-questtwo-0"></div>
          <div className="normalpad" id="final-questtwo-1"></div>
          <div className="normalpad" id="final-questtwo-2"></div>

          <div className="normalpad" id="final-questthree-0"></div>

          <div className="normalpad" id="final-quest-four"></div>

          <div className="lowpad" id="final-quest-five"></div>
        </div>
      </div>
    </form>
  );
}
