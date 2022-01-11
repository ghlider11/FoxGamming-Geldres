import { useContexto } from "./Context/CartContext"

const Carrito = () => {
    const { carrito, borrarDelCarrito , limpiarCarrito } = useContexto()
  
    return (
        <div>
            Soy Carrito
            {carrito.length > 0 ? (
                <ul>
                    {carrito.map((producto, indice) => {
                        return <li key={indice}>{producto.description} - ${producto.price}</li>
                    })}
                </ul>
            ) : <p>No hay productos en el carrito</p>}

            <p className={carrito.length > 0 ? "rojo" : "negro"} >si tengo cosas en el carrito soy rojo, sino negro</p>
        </div>
    )
}

export default Carrito
