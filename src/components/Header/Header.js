import { NavLink } from "react-router-dom"
import { Navbar, Container, Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { useContexto } from "../Context/CartContext"



const Header = ({  links }) => {

    const { cantidad_total } = useContexto()

    return (
        <>
            <header id="main-header" >
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><NavLink to="/"className="headercolor"><img src="logofox.png" alt="" width="30" height="24" />Fox Gamming</NavLink></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        {links.map((elemento, indice) => {
                        return <Nav.Link><NavLink className="headercolor" key={elemento.id} to={elemento.href}> {elemento.name}</NavLink></Nav.Link>
                    })}                    
                            <Nav.Link><NavLink to="/carrito" className="headercolor"><FontAwesomeIcon icon={faShoppingCart} style={{fontSize:"20px"}} />{cantidad_total}</NavLink></Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </header>


        </>
    )
}

export default Header