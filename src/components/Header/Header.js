import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="/home">Home</Nav.Link>
                            <NavDropdown title="Courses" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Data Structure</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Algorithm</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Programming</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Networking</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/blog">Blogs</Nav.Link>
                            <Nav.Link href="/about">About Us</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
                <br />
            </>
        </div>
    );
};

export default Header;