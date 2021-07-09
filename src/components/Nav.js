import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Login from "./Login";
import { Navbar, NavDropdown, Form, FormControl } from "react-bootstrap"

function Nav() {
    const [show, setShow] = useState(0);

    if (show === 1) {
        return <Login />;
    }
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Button
                        name="login"
                        onClick={() => setShow(1)}
                        className="btn-primary btn-lg mx-5"
                    >
                        Login
                    </Button>
                    <Button name="signup" className="btn-primary btn-lg">
                        Sign up
                    </Button>

                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default Nav;