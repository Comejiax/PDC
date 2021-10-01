import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import IconPd from "../assets/PD_Neon_Sin_Fondo.png";

interface NavbarProps {}
interface NavbarState {}

class Navigation extends React.Component<NavbarProps, NavbarState> {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" className="navbar" variant="dark">
          <Container>
            <Navbar.Brand href="/">
              <img
                src={IconPd}
                width="60"
                height="60"
                alt="Panitas logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
              <Nav className="links">
                <Nav.Link className="link" href="/">Inicio</Nav.Link>
                <Nav.Link className="link" href="/">Sobre Nosotros</Nav.Link>
                <Nav.Link className="link" href="/">Proyectos</Nav.Link>
                <Nav.Link className="link" href="/">Redes Sociales</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
