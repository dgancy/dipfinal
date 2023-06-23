import React from "react";
import { Button } from "react-bootstrap";

export default function Oktatoi() {
  function Summary() {
    var mistakes = "";
    var arraysummary = [];
    
  }

  return (
    <form>
      <br />
      <div class="row justify-content-center">
        <Button class="col-2 btn btn-primary" onClick={Summary}>
          Kiértékelés
        </Button>
      </div>
      <div class="card mb-3" className="cards">
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p id="leiras-one" class="card-text" />
        </div>
        <div class="row justify-content-end">
          <Button class="col-2 btn btn-primary">Megértettem</Button>
        </div>
      </div>
      <div class="card mb-3" className="cards">
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
        </div>
        <div class="row justify-content-end">
          <Button class="col-2 btn btn-primary">Megértettem</Button>
        </div>
      </div>
      <div class="card mb-3" className="cards">
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
        </div>
        <div class="row justify-content-end">
          <Button class="col-2 btn btn-primary">Megértettem</Button>
        </div>
      </div>
      <div class="card mb-3" className="cards">
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p id="leiras-ne" class="card-text" />
        </div>
        <div class="row justify-content-end">
          <Button class="col-2 btn btn-primary">Megértettem</Button>
        </div>
      </div>
      <div class="card mb-3" className="cards">
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
        </div>
        <div class="row justify-content-end">
          <Button class="col-2 btn btn-primary">Megértettem</Button>
        </div>
      </div>
      <div class="card mb-3" className="cards">
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
        </div>
        <div class="row justify-content-end">
          <Button class="col-2 btn btn-primary">Megértettem</Button>
        </div>
      </div>
    </form>
  );
}
