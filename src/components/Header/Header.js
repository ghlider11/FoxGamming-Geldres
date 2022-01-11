import { Link, NavLink } from "react-router-dom"
import Cardwidget from "../Cardwidget"
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import NavBar from "../NavBar/NavBar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { useContexto } from "../Context/CartContext"



const Header = ({ nombre, links }) => {

    const { cantidad_total } = useContexto()
    console.log("AQUI EN HEADER HAY "+cantidad_total)

    return (
        <>
            <header id="main-header" className="header">
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><NavLink to="/"><img src="logofox.png" alt="" width="30" height="24" />Fox Gamming</NavLink></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        {links.map((elemento, indice) => {
                        return <Nav.Link><NavLink key={elemento.id} to={elemento.href}> {elemento.name}</NavLink></Nav.Link>
                    })}
                          

                            <NavDropdown title="Combos" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">PC + mando ps3</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Pc + kit de limpieza</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Laptop + mochila</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Nothing</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link><NavLink to="/carrito"><FontAwesomeIcon icon={faShoppingCart} style={{fontSize:"20px"}} />{cantidad_total}</NavLink></Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </header>
            <h2>PRODUCTOS</h2>

        </>
    )
}

export default Header