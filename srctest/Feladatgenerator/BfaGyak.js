import React from 'react'
import { Button } from 'react-bootstrap'

var array = [];
var fokszam;

function generate() {
    var hossz = Math.floor(Math.random() * 3) + 10;
    var input = document.getElementById("generate");
    fokszam = 2;
    for (let i = 0; i < hossz; i++) {
        array.push(Math.floor(Math.random() * 100));
    }

    for (let i = 0; i < 7; i++) {
        if (i === 0 || i === 2) {
            input.innerHTML += ' <input type="text" name="' + i + '"  className="normalpad" size="2" id="inp' + i + '">    <br/><br/>    ';
        } else if (i === 1) {
            input.innerHTML += ' <input type="text" name="' + i + '"  className="normalpad" size="2" id="inp' + i + '">    <a> </a>    ';
        }
        else {
            input.innerHTML += ' <input type="text" name="' + i + '"  className="allinput" size="2" id="inp' + i + '">';
        }
    }

    console.log("hossz: " + hossz);
    console.log("array: " + array);

    document.getElementById("fokszam").innerHTML = "Adott az alábbi B-fa, amelynek minimális fokszáma " + fokszam + ". A következő számsoron alkalmazza a tanultakat.";
    document.getElementById("szamsor").innerHTML = "[ " + array + " ].";
    document.getElementById("btngen").disabled = true;

    document.getElementById("inp1").style.marginRight = "35px";
    document.getElementById("inp2").style.marginLeft = "35px";

}

function check() {



    var edgemax = fokszam;
    var SplittedArray = array;
    var OutputArrayEdge = [];
    var Change = [];
    var OutputArrayRight_1 = [];
    var OutputArrayLeft_1 = [];
    var OutputArrayRight_2 = [];
    var OutputArrayLeft_2 = [];
    var OutputArrayMiddle_1 = [];
    var OutputArrayMiddle_2 = [];

    var state = 0;

    console.log(SplittedArray);

    for (let i = 0; i < SplittedArray.length; i++) {
        if (i < 3) {
            if (i < edgemax) {
                OutputArrayEdge.push(SplittedArray[i]);
            }
            else if (i = edgemax) {
                OutputArrayEdge.push(SplittedArray[i]);
                OutputArrayEdge.sort();
                Change.push(OutputArrayEdge[edgemax - 1]);
                OutputArrayLeft_1.push(OutputArrayEdge[0]);
                OutputArrayRight_1.push(OutputArrayEdge[edgemax]);
                OutputArrayEdge = Change;
            }
        } else {
            if (SplittedArray[i] > OutputArrayEdge[0] && SplittedArray[i] < OutputArrayEdge[OutputArrayEdge.length] && OutputArrayEdge.length > 1) {
                OutputArrayMiddle_1.push(SplittedArray[i]);
            }
            if (OutputArrayLeft_1.length < edgemax + 1 && OutputArrayRight_1.length < edgemax + 1 && state === 0) {
                if (SplittedArray[i] > OutputArrayEdge[OutputArrayEdge.length - 1]) {
                    OutputArrayRight_1.push(SplittedArray[i]);
                    OutputArrayRight_1.sort();
                } else if (SplittedArray[i] < OutputArrayEdge[0] && state === 0) {
                    OutputArrayLeft_1.push(SplittedArray[i]);
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
        }//ellenorzo feladat 9,2,5,7,6,5,4,1
        if (OutputArrayEdge.length === edgemax + 1) {
            for (let k = 0; k < 2; k++) {
                if (OutputArrayRight_1[k] > OutputArrayEdge[OutputArrayEdge.length - 1] && OutputArrayRight_1[0] !== " ") {
                    OutputArrayRight_2.push(OutputArrayRight_1[k]);
                    OutputArrayRight_1.shift();
                } else if (OutputArrayRight_1[k] < OutputArrayEdge[OutputArrayEdge.length - 1] && OutputArrayRight_1[0] !== " ") {
                    OutputArrayMiddle_2.push(OutputArrayRight_1[k]);
                    OutputArrayRight_1.shift();
                } else if (OutputArrayLeft_1[k] > OutputArrayEdge[0] && OutputArrayLeft_1[0] !== " ") {
                    OutputArrayMiddle_1.push(OutputArrayLeft_1[k]);
                    OutputArrayLeft_1.shift();
                } else if (OutputArrayLeft_1[k] < OutputArrayEdge[0] && OutputArrayLeft_1[0] !== " ") {
                    OutputArrayLeft_2.push(OutputArrayLeft_1[k]);
                    OutputArrayLeft_1.shift();
                }
            }
            if (OutputArrayEdge.length === edgemax + 1) {
                OutputArrayLeft_1.push(OutputArrayEdge[0]);
                OutputArrayRight_1.push(OutputArrayEdge[OutputArrayEdge.length - 1]);

                OutputArrayEdge.pop();
                OutputArrayEdge.shift();
            }

            state = 1;
        }
        if (state === 1) {
            if (SplittedArray[i] < OutputArrayLeft_1[0] && SplittedArray[i] < OutputArrayEdge[0]) {
                OutputArrayLeft_2.push(SplittedArray[i]);
                OutputArrayLeft_2.sort();
            } else if (SplittedArray[i] > OutputArrayLeft_1[OutputArrayLeft_1.length - 1] && SplittedArray[i] < OutputArrayEdge[0]) {
                OutputArrayMiddle_1.push(SplittedArray[i]);
                OutputArrayMiddle_1.sort();
            } else if (SplittedArray[i] < OutputArrayRight_1[0] && SplittedArray[i] > OutputArrayEdge[OutputArrayEdge.length - 1]) {
                OutputArrayMiddle_2.push(SplittedArray[i]);
                OutputArrayMiddle_2.sort();
            } else if (SplittedArray[i] < OutputArrayRight_1[OutputArrayRight_1.length - 1] && SplittedArray[i] > OutputArrayEdge[OutputArrayEdge.length - 1]) {
                OutputArrayRight_2.push(SplittedArray[i]);
                OutputArrayRight_2.sort();
            }

            if (OutputArrayLeft_1[1] !== " " && OutputArrayLeft_2.length < edgemax && OutputArrayLeft_1.length > 1) {
                OutputArrayLeft_2.push(OutputArrayLeft_1[0]);
                OutputArrayLeft_1.shift();
            } else if (OutputArrayLeft_1[1] !== " " && OutputArrayMiddle_1.length < edgemax && OutputArrayLeft_1.length > 1) {
                OutputArrayMiddle_1.push(OutputArrayLeft_1[OutputArrayLeft_1.length - 1]);
                OutputArrayLeft_1.pop();
            }
            OutputArrayLeft_1.sort();
            OutputArrayLeft_2.sort();

            if (OutputArrayRight_1[1] !== " " && OutputArrayRight_2.length < edgemax && OutputArrayRight_1.length > 1) {
                OutputArrayRight_2.push(OutputArrayRight_1[OutputArrayRight_1.length - 1]);
                OutputArrayRight_1.pop();
            } else if (OutputArrayRight_1[1] !== " " && OutputArrayMiddle_2.length < edgemax && OutputArrayRight_1.length > 1) {
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
    OutputArrayMiddle_1.sort();

    console.log("Edgemax: " + edgemax);
    console.log("Edge: " + OutputArrayEdge);
    console.log("Left1: " + OutputArrayLeft_1);
    console.log("Left2: " + OutputArrayLeft_2);
    console.log("Right1: " + OutputArrayRight_1);
    console.log("Right2: " + OutputArrayRight_2);
    console.log("Middle1: " + OutputArrayMiddle_1);
    console.log("Middle2: " + OutputArrayMiddle_2);

    //if()
}

export default function BfaGyak() {
    return (
        <div className='center'>
            <div className='normalpad'>
                <h1>Bfa feladatok</h1>
            </div>
            <div className='normalpad'>
                <Button id='btngen' className="button" variant="warning" onClick={generate}>Új feladat</Button>
            </div>
            <div>
                <a id='fokszam' /><br />
                <p id="szamsor" />
                <div className='normalpad' id='generate'></div>
                <Button id='btngen' className="button" variant="warning" onClick={check}>Ellenőrzés</Button>
            </div>
        </div>
    )
}
