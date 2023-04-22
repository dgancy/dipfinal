import React from 'react'
import Button from 'react-bootstrap/Button';

var SplittedArray = [];

function bfafea() {
    var a = document.getElementById("fok").value;
    var edgemax = (2 * a) - 2;
    //document.getElementById("edgemax").innerHTML = edgemax;
    //document.getElementById("childmax").innerHTML = (2 * a);

    var b = document.getElementById("elemek").value;
    SplittedArray.push(b);
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
            if (OutputArrayLeft_1.length < edgemax + 1 && OutputArrayRight_1.length < edgemax + 1 && state == 0) {
                if (SplittedArray[i] > OutputArrayEdge[OutputArrayEdge.length - 1]) {
                    OutputArrayRight_1.push(SplittedArray[i]);
                    OutputArrayRight_1.sort();
                } else if (SplittedArray[i] < OutputArrayEdge[0] && state == 0) {
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
        if (OutputArrayEdge.length == edgemax + 1) {
            for (let k = 0; k < 2; k++) {
                if (OutputArrayRight_1[k] > OutputArrayEdge[OutputArrayEdge.length - 1] && OutputArrayRight_1[0] != " ") {
                    OutputArrayRight_2.push(OutputArrayRight_1[k]);
                    OutputArrayRight_1.shift();
                } else if (OutputArrayRight_1[k] < OutputArrayEdge[OutputArrayEdge.length - 1] && OutputArrayRight_1[0] != " ") {
                    OutputArrayMiddle_2.push(OutputArrayRight_1[k]);
                    OutputArrayRight_1.shift();
                } else if (OutputArrayLeft_1[k] > OutputArrayEdge[0] && OutputArrayLeft_1[0] != " ") {
                    OutputArrayMiddle_1.push(OutputArrayLeft_1[k]);
                    OutputArrayLeft_1.shift();
                } else if (OutputArrayLeft_1[k] < OutputArrayEdge[0] && OutputArrayLeft_1[0] != " ") {
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

            if (OutputArrayLeft_1[1] != " " && OutputArrayLeft_2.length < edgemax && OutputArrayLeft_1.length > 1) {
                OutputArrayLeft_2.push(OutputArrayLeft_1[0]);
                OutputArrayLeft_1.shift();
            } else if (OutputArrayLeft_1[1] != " " && OutputArrayMiddle_1.length < edgemax && OutputArrayLeft_1.length > 1) {
                OutputArrayMiddle_1.push(OutputArrayLeft_1[OutputArrayLeft_1.length - 1]);
                OutputArrayLeft_1.pop();
            }
            OutputArrayLeft_1.sort();
            OutputArrayLeft_2.sort();

            if (OutputArrayRight_1[1] != " " && OutputArrayRight_2.length < edgemax && OutputArrayRight_1.length > 1) {
                OutputArrayRight_2.push(OutputArrayRight_1[OutputArrayRight_1.length - 1]);
                OutputArrayRight_1.pop();
            } else if (OutputArrayRight_1[1] != " " && OutputArrayMiddle_2.length < edgemax && OutputArrayRight_1.length > 1) {
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

    console.log("Edgemax: " + edgemax);
    console.log("Edge: " + OutputArrayEdge);
    console.log("Left1: " + OutputArrayLeft_1);
    console.log("Left2: " + OutputArrayLeft_2);
    console.log("Right1: " + OutputArrayRight_1);
    console.log("Right2: " + OutputArrayRight_2);
    console.log("Middle1: " + OutputArrayMiddle_1);
    console.log("Middle2: " + OutputArrayMiddle_2);

    document.getElementById("array1").innerHTML = SplittedArray;
    document.getElementById("arrayedge").innerHTML = OutputArrayEdge;
    document.getElementById("arrayright_1").innerHTML = OutputArrayRight_1;
    document.getElementById("arrayright_2").innerHTML = OutputArrayRight_2;
    document.getElementById("arrayleft_1").innerHTML = OutputArrayLeft_1;
    document.getElementById("arrayleft_2").innerHTML = OutputArrayLeft_2;
    document.getElementById("arraymiddle_1").innerHTML = OutputArrayMiddle_1;
    document.getElementById("arraymiddle_2").innerHTML = OutputArrayMiddle_2;

    /**/

}

export default function Bfa() {

    return (
        <div className='center'>
            <h1 className="test">B-fa</h1>
            <div className='normalpad'>
                <a>Fokszám : </a><input type="text" id="fok" className="allinput"></input>
                <br />
            </div>
            <div className='normalpad'>
                <a>Elemek  : </a><input type="number" id="elemek" className="allinput"></input>
            </div>
            <Button variant="warning" className="button" id="btn" onClick={bfafea}>Megold</Button><br />
            <br />
            <div className='square-normal'>
                <a className='text' id="array1"></a>
            </div>
            <div className='center'>
                <div className='square-edge'>
                    <a className='text' id="arrayedge"></a>
                </div>
                <br />
                <div className='center'>
                    <div className='square-right_1'>
                        <a className='text' id="arrayright_1"></a>
                    </div>
                    <br />
                    <div className='square-left_1'>
                        <a className='text' id="arrayleft_1"></a>
                    </div>
                </div>
                <div>
                    <div className='square-middle_1'>
                        <a className='text' id="arraymiddle_1"></a>
                    </div>
                    <br />
                    <div className='square-middle_2'>
                        <a className='text' id="arraymiddle_2"></a>
                    </div>
                    <div className='square-right_2'>
                        <a className='text' id="arrayright_2"></a>
                    </div>
                    <br />
                    <div className='square-left_2'>
                        <a className='text' id="arrayleft_2"></a>
                    </div>
                    <br />
                </div>
            </div>
        </div>
    )
}
