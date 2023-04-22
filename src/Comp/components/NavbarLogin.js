import React, { Component } from "react";
import { Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "../pages/Home";
import Bfa from "../Algoritmus2/Bfa";
import Test from "../../testpages/Test";
import Mester from "../Algoritmus2/Mester";
import Helyettes from "../Algoritmus2/Helyettes";
import Rekurzios from "../Algoritmus2/Rekurzios";
import MesterGyak from "../Feladatgenerator/MesterGyak";
import RekurziosGyak from "../Feladatgenerator/RekurziosGyak";
import Hashtabla from "../Algoritmus2/Hashtabla";
import HashGyak from "../Feladatgenerator/HashGyak";
import RedBlackTree from "../Algoritmus2/RedBlackTree";
import BfaGyak from "../Feladatgenerator/BfaGyak";
import RedBlackTreeGyak from "../Feladatgenerator/RedBlackTreeGyak";
import Login from "../login/Login";
import Register from "../login/Register";
import Backpropagation from "../Algoritmus2/Backtracking";
import BackporpGyak from "../Feladatgenerator/BackporpGyak";
import Oktatoi from "../../testpages/Oktatoi";

function ModeDark() {
  var element = document.body;
  element.classList.add("dark-mode");
  element.classList.remove("light-mode");
  element.classList.remove("red-mode");
}

function ModeLight() {
  var element = document.body;
  element.classList.add("light-mode");
  element.classList.remove("dark-mode");
  element.classList.remove("red-mode");
}

export default class Navbar1 extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <Navbar bg="black" variant="dark">
              <Nav>
                <NavDropdown title="Teszt">
                  <NavDropdown.Item as={Link} to={"/test"}>
                  Teszt
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/oktatoi"}>
                    Oktatás
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Algoritmus II">
                  <NavDropdown.Item as={Link} to={"/rekurzios"}>
                    Rekurziós fa
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/mester"}>
                    Mester Tétel
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/bfa"}>
                    Bfa
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/hash"}>
                    Hash tábla
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/rbt"}>
                    Piros-Fekete Fa
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/back"}>
                    Visszalépéses keresés
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Feladatok">
                  <NavDropdown.Item as={Link} to={"/rekurziosfea"}>
                    Rekurziós fa Feladatok
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/mesterfea"}>
                    Mester Tétel Feladatok
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/bfafea"}>
                    Bfa Feladatok
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/hashfea"}>
                    Hash tábla Feladatok
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/rbtfea"}>
                    Piros-Fekete Fa Feladatok
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/backfea"}>
                    Visszalépéses keresés Feladatok
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link as={Link} to={"/log"}>
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to={"/reg"}>
                  Register
                </Nav.Link>

                <Button variant="dark" onClick={ModeDark}>
                  Dark
                </Button>
                <Button variant="light" onClick={ModeLight}>
                  Light
                </Button>
              </Nav>
            </Navbar>
          </div>
          <div>
            <Routes>
              <Route path="/back" element={<Backpropagation />} />
              <Route path="/backfea" element={<BackporpGyak />} />
              <Route path="/mester" element={<Mester />} />
              <Route path="/test" element={<Test />} />
              <Route path="/oktatoi" element={<Oktatoi />} />
              <Route path="/dip" element={<Home />} />
              <Route path="/bfa" element={<Bfa />} />
              <Route path="/reg" element={<Register />} />
              <Route path="/log" element={<Login />} />
              <Route path="/bfafea" element={<BfaGyak />} />
              <Route path="/mesterfea" element={<MesterGyak />} />
              <Route path="/rekurziosfea" element={<RekurziosGyak />} />
              <Route path="/helyettesito" element={<Helyettes />} />
              <Route path="/rekurzios" element={<Rekurzios />} />
              <Route path="/hash" element={<Hashtabla />} />
              <Route path="/hashfea" element={<HashGyak />} />
              <Route path="/rbt" element={<RedBlackTree />} />
              <Route path="/rbtfea" element={<RedBlackTreeGyak />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}
