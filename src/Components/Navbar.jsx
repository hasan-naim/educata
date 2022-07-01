import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../assets/educata.svg';

function NavBar() {
    return (
        <>
            <Navbar className="bg-primary shadow fixed-top" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} alt="educata logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Courses</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <NavDropdown title="Categories" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Javascript</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Node Js</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;
