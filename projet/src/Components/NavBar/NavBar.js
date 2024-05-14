import React, { Component, Fragment } from "react";
import "../../Components/NavBar/NavBar.css";
import logo from "../../Assets/Images/Logo.png";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

class NavBar extends Component {
  render() {
    return (
      <Fragment>
        <Container className="navBar bg-body-secondary" fluid>
          <Navbar expand="lg">
            <Container>
              <Navbar.Brand href="#">
                <div className="navBarImg">
                  <img src={logo} alt="logo"></img>
                </div>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="NavList me-auto my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <Nav.Link href="#action1" className="NavLinkList">
                    Demos
                  </Nav.Link>
                  <Nav.Link href="#action2" className="NavLinkList">
                    About
                  </Nav.Link>
                  <Nav.Link href="#action3" className="NavLinkList">
                    Blog
                  </Nav.Link>
                  <Nav.Link href="#action4" className="NavLinkList">
                    Pages
                  </Nav.Link>
                  <Nav.Link href="#action3" className="NavLinkList">
                    Contact
                  </Nav.Link>
                  <Nav.Link href="#action3">
                    <h1 className="NavLinkListLogin">Login</h1>
                  </Nav.Link>
                </Nav>
                <div>
                  <Button className="navBarButton">Get Started Free</Button>
                </div>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Container>
      </Fragment>
    );
  }
}

export default NavBar;
