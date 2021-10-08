import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from "react-bootstrap";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
const NavbarComp = () => {
    return (
        <Router>
            <div>
                <Navbar bg="dark" variant={"dark"} expand="lg">
                    <Container fluid>
                        <Navbar.Brand href="#">Tamim Computer Academy</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
                                <Nav.Link as={Link} to={"/blog"}>Blogs</Nav.Link>
                                <NavDropdown title="Courses" id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="#action3">Data Structure</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">Networking</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                        System Administration
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link as={Link} to={"/about"}>About Us</Nav.Link>
                                <Nav.Link as={Link} to={"/contact"}>Contact Us</Nav.Link>
                            </Nav>
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </Router>
    );
};

export default NavbarComp;