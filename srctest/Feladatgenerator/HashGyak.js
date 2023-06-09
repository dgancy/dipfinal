import React from 'react'
import { Button } from 'react-bootstrap'

let type;
var hossz;
var elemszam;
var numbers = [];
var numbersh2 = [];
var charakters = [];
var c1;
var c2;

function generate() {
    var chars = 'QWERTZUIOPLKJHGFDSAYXCVBNM';
    var h1 = '';
    var különbözet = 0;
    const tblBody = document.createElement("tbody");
    const tbl = document.createElement("table");
    var input = document.getElementById("gen");
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
    console.log("Típus: " + type);


    if (elemszam >= hossz) {
        különbözet = (elemszam - hossz) + 2;
        elemszam -= különbözet;
    } else if (elemszam < (hossz / 2)) {
        elemszam += 1;
    }
    console.log("Elemek: " + elemszam);

    console.log("Hossz: " + hossz);
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
        document.getElementById("hossz").innerHTML = "Szúrja be egy " + hossz
            + " hosszúságú hash táblába a következő objektumokat "
            + type + " hasítás alkalmazásával.";
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
        document.getElementById("hossz").innerHTML = "Szúrja be egy " + hossz
            + " hosszúságú hash táblába a következő objektumokat " + type
            + "( " + c1 + " , " + c2 + " )" + " hasítás alkalmazásával.";
        document.getElementById("h").innerHTML = h1 + " .";
    } else if (type === "double") {
        for (let i = 0; i < elemszam; i++) {
            if (i === elemszam) {
                h1 += "h1:( " + charakters[i] + " ) = " + numbers[i] + ", "
                    + "h2:( " + charakters[i] + " ) = " + numbersh2[i] + " ";
            }
            h1 += "h1:( " + charakters[i] + " ) = " + numbers[i] + ", "
                + "h2:( " + charakters[i] + " ) = " + numbersh2[i] + " ";
        }
        document.getElementById("hossz").innerHTML = "Szúrja be egy " + hossz
            + " hosszúságú hash táblába a következő objektumokat " + type
            + " hasítás alkalmazásával.";
        document.getElementById("h").innerHTML = h1 + " .";
    }
    console.log("H1: " + h1);

    for (let i = 0; i < 2; i++) {
        const row = document.createElement("tr");
        if (i === 0) {
            for (let j = 0; j < hossz; j++) {
                const cell = document.createElement("td");
                const cellText = document.createTextNode(j);
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            tblBody.appendChild(row);
        }


    }
    tbl.appendChild(tblBody);
    document.body.appendChild(tbl);
    tbl.style.border = "solid 3px";
    tbl.style.borderColor = "brown";
    tbl.style.width = cs + "px";
    tbl.style.textAlign = "center";
    tbl.style.position = "absolute";
    tbl.style.top = "30%";
    tbl.style.left = "30%";


    for (let j = 0; j < hossz; j++) {
        input.innerHTML += '<input type="text" name="'
            + j + '" size="4" id="inp' + j + '" className="center">';
    }

    console.log("first:" + charakters);
    document.getElementById("btngen").disabled = true;
    return charakters, type, hossz, elemszam;
}

function check() {
    var leftover;
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
            } else if (arrayfinal[leftover + c1] !== " " && (leftover + c1 + (c2 * c2)) < hossz) {
                leftover = numbers[j] % hossz;
                arrayfinal[leftover + c1 + (c2 * c2)] = charakters[j];
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
            if (userresult[i] === '') {
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
        document.getElementById("final").innerHTML = "Hibás megoldás, a helyes megoldás: [ " 
        + arrayfinal + " ].";
    }
}

/*
*/
export default function HashGyak() {
    return (
        <div className='center'>
            <div className='normalpad'>
                <h1>Hashtábla feladatok</h1>
            </div>
            <div className='normalpad'>
                <Button id='btngen' className="button" variant="warning" onClick={generate}>Új feladat</Button>
            </div>
            <div id='hossz' className='center'></div>
            <div id='h' className='highpad'></div>
            <div id='tbl' className='lowpad'></div>
            <div id='gen' className='highpad'></div>
            <div className='normalpad'>
            <Button id='btncheck' className="button" variant="warning" onClick={check}>Ellenőriz</Button>
            </div>
            <div className='lowpad'>
                <a id='final'></a>
            </div>
        </div>
    )
}
