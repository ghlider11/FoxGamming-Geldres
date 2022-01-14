import { NavLink } from "react-router-dom"
import { useContexto } from "./Context/CartContext"

const Carrito = () => {
    const { carrito, removeItem , clear, precio_total } = useContexto()
    const finalizarCompra = () => {
        console.log("Guardando la compra en la db...")
        clear()
    }
  
    return (
        <div>
            Soy Carrito
            {carrito.length > 0 ? (
                <>
                <ul>
                    {carrito.map((item, indice) => {
                        return (
                        <li key={indice}>
                            {item.description} - S/{item.price}.00 - Cantidad {item.cantidad} Subtotal: S/{item.price * item.cantidad}.00 -
                            <button onClick={()=>removeItem(item.id,item.cantidad,item.price)}>borrar</button>
                        </li>
                        )
                    })}
                </ul>
                <h1>Total: S/{precio_total}.00</h1></>
            ) :<><p>No hay productos en el carrito</p>
                <NavLink to="/productos"><button>Volver a comprar</button></NavLink>
               </> 
                
            }
            <NavLink to="/"><button  onClick={finalizarCompra}>Terminar comprar</button></NavLink>

            {/*<p className={carrito.length > 0 ? "rojo" : "negro"} >si tengo cosas en el carrito soy rojo, sino negro</p>*/}
        </div>
    )
}

export default Carrito
