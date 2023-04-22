import React from "react";

export default function Helyettes() {
  return (
    <div className="test">
      <h1 >Helyettesítő módszer</h1>
      <div >
        <br />
        <div >
        <a>Bizonyítsuk helyettesítő módszer segítségével a következő </a>
        <a>Generált random</a>
        <a>egyenletet.</a>
        <br />
        <br />
        <a>Bizonyítsuk, hogy T(n)=O(n^2), azaz T(n) cn^2</a>
        <br />
        <a>Feltevés: T(n/3) c*(n/3)^2</a>
        <br />
        <a>T(n) = 9T(n/3)+n</a>
        </div>
      </div>
    </div>
  );
}
