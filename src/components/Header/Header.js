const Header = (props) => {
    
    return (
        <header id="main-header" className="header">
            <h1 className="titulo">E-Commerce Fox Gamming {props.nombre}</h1>
            
            <img className="fox" src="/logofox.png" alt="logo" />
            
        </header>
    )
}

export default Header