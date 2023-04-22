import React, { Component } from "react"
import { Nav, Navbar, NavDropdown } from "react-bootstrap"

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from "../pages/Home";
import Bfa from "../Algoritmus2/Bfa";
import Test from "../testpages/Test";
import Login from "../other/Profile";
import Mester from "../Algoritmus2/Mester";
import Helyettes from "../Algoritmus2/Helyettes";
import Rekurzios from "../Algoritmus2/Rekurzios";
import MesterGyak from "../Feladatgenerator/MesterGyak";
import RekurziosGyak from "../Feladatgenerator/RekurziosGyak";
import Hashtabla from "../Algoritmus2/Hashtabla";
import HashGyak from "../Feladatgenerator/HashGyak";
import RedBlackTree from "../Algoritmus2/RedBlackTree";
import BfaGyak from "../Feladatgenerator/BfaGyak";
import Log from "../login/Login";

export default class Navbar1 extends Component {
  render() {

    return (
      <Router>
        <div>
          <div>
            <Navbar bg='black' variant='dark'>
              <Nav>
                <Nav.Link as={Link} to={"/dip"} >Kezdőlap</Nav.Link>

                <Nav.Link as={Link} to={"/test"}>Teszt</Nav.Link>

                <NavDropdown title="Algoritmus II">
                  <NavDropdown.Item as={Link} to={"/helyettesito"}>Helyettesítő módszer</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/rekurzios"}>Rekurziós fa</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/mester"}>Mester Tétel</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/bfa"}>Bfa</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/hash"}>Hash tábla</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/rbt"}>Piros-Fekete Fa</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Feladatok">
                  <NavDropdown.Item as={Link} to={"/helyettesitofea"}>Helyettesítő módszer Feladatok</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/rekurziosfea"}>Rekurziós fa Feladatok</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/mesterfea"}>Mester Tétel Feladatok</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/bfafea"}>Bfa Feladatok</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/hashfea"}>Hash tábla Feladatok</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/rbtfea"}>Piros-Fekete Fa Feladatok</NavDropdown.Item>
                </NavDropdown>

                <Nav.Link as={Link} to={"/login"}>Belépés</Nav.Link>

                <NavDropdown title="Profile">
                  <NavDropdown.Item as={Link} to={"/profile"}>Profile</NavDropdown.Item>
                </NavDropdown>

                {/*<Nav.Link href='/register' >Register</Nav.Link>*/}

              </Nav>
            </Navbar>
          </div>

          <div>
            <Routes>
              <Route path="/login" element={<Log />} />
              <Route path="/mester" element={<Mester />} />
              <Route path="/test" element={<Test />} />
              <Route path="/dip" element={<Home />} />
              <Route path="/profile" element={<Login />} />
              <Route path="/bfa" element={<Bfa />} />
              <Route path="/bfafea" element={<BfaGyak />} />
              <Route path="/mesterfea" element={<MesterGyak />} />
              <Route path="/rekurziosfea" element={<RekurziosGyak />} />
              <Route path="/helyettesito" element={<Helyettes />} />
              <Route path="/rekurzios" element={<Rekurzios />} />
              <Route path="/hash" element={<Hashtabla />} />
              <Route path="/hashfea" element={<HashGyak />} />
              <Route path="/rbt" element={<RedBlackTree />} />
            </Routes>
          </div>
        </div>
      </Router>
    )
  }
}