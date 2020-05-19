import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, Router } from "react-router-dom";
function Header(props) {
  return (
    <>
      <Navbar
        bg="dark"
        expand="lg"
        variant="dark"
        className="mid-night mr-0 ml-0"
      >
        <Navbar.Brand href="#home" className="h3">
          Covid 19
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/" className="text-light h5">
              Data
            </Nav.Link>
            <Nav.Link href="/map" className="text-light h5">
              Map
            </Nav.Link>

            <Nav.Link href="/analyst" className="text-light h5">
              Analyst
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link
              href="https://www.who.int/health-topics/coronavirus#tab=tab_1"
              className="text-light h5"
              target="_blank"
            >
              About COVID-19
            </Nav.Link>
            <Nav.Link
              href="https://www.youtube.com/watch?v=BtulL3oArQw"
              className="text-light h5"
            >
              Song
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header;
