import React from "react"
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'


const NavBar = () => {
    return (


        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home"><img src="logo192.png" alt="" width="30" height="24" />Fox Gamming</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">PCs</Nav.Link>
                        <Nav.Link href="#pricing">Laptops</Nav.Link>
                        <NavDropdown title="Combos" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">PC + mando ps3</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Pc + kit de limpieza</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Laptop + mochila</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Nothing</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default NavBar