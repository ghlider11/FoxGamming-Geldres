import { Link, NavLink } from "react-router-dom"
import Cardwidget from "../Cardwidget"

const Header = ({ nombre, links }) => {

    return (
        <>
            <header id="main-header" className="header">
                <div id="brand">
                    <NavLink to="/">
                        <img className="fox" src="/logofox.png" alt="logo" />
                        <h1 className="titulo">E-Commerce Fox Gamming {nombre}</h1>
                    </NavLink>
                </div>

                <nav>
                    {links.map((elemento, indice) => {
                        return <NavLink key={elemento.id} to={elemento.href}>{elemento.name}</NavLink>
                    })}
                    <NavLink to="/carrito">
                        <Cardwidget/>
                    </NavLink>
                </nav>
            </header>




        </>
    )
}

export default Header