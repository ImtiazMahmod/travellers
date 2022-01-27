import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { FaUserAlt } from "react-icons/fa";

const Navigation = () => {
  const { user, logout } = useAuth();

  const icon1 = <FaUserAlt style={{ color: "#FF682D" }} />;
  return (
    <Container fluid="md">
      <Navbar
        className="px-4 sticky-top fw-bold"
        collapseOnSelect
        expand="lg"
        variant="light"
      >
        <Navbar.Brand href="/">
          <h1 className="primaryColor logo">Travellers</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/tourPackages">
              Tours
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact Us
            </Nav.Link>
          </Nav>
          {/* user  */}

          <Nav>
            {user?.email ? (
              <div className="d-flex justify-content-center">
                <NavDropdown title={icon1} id="collapsible-nav-dropdown">
                  <div className="border-0 p-3">
                    <div className="d-flex justify-content-center flex-column align-items-center ">
                      <img
                        width="40"
                        height="40"
                        className=" rounded-circle"
                        src={user?.photoURL}
                        alt=""
                      />
                      <p className="primaryColor fw-bold m-2">
                        {user?.displayName}
                      </p>
                    </div>
                    {/* <NavDropdown.Item as={Link} to="/myTours">
                      My Tours
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/addTours">
                      Add Tours
                    </NavDropdown.Item> */}
                    <NavDropdown.Item as={Link} to="/dashboard">
                      Dashboard
                    </NavDropdown.Item>

                    <NavDropdown.Divider />

                    <Button
                      className="w-100 fw-bold"
                      variant="outline-warning"
                      onClick={logout}
                    >
                      <FaUserAlt style={{ color: "#FF682D" }} />
                      LogOut
                    </Button>
                  </div>
                </NavDropdown>
              </div>
            ) : (
              <Nav.Link as={Link} to="/login">
                {icon1} Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default Navigation;
