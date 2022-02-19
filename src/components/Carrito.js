import { NavLink } from "react-router-dom"
import { useContexto } from "./Context/CartContext"
import { Button, Card } from 'react-bootstrap';
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from "./firebase";



const Carrito = () => {
    const { carrito, removeItem, clear, precio_total } = useContexto()
    const finalizarCompra = () => {
        console.log("Guardando la compra en la db...")

        const ventasCollection = collection(db, "ventas")
        addDoc(ventasCollection, {
            buyer: {
                name: "Jefferson",
                lastName: "Geldres",
                email: "JeffersonGeldres@gmail.com"
            },
            items: carrito,
            date: serverTimestamp(),
            total: precio_total
        })
            .then((resultado) => {
                clear()
            })


    }

    return (
        <div>
            <h1>Carrito de compras</h1>
            {carrito.length > 0 ? (
                <>
                    <ul>
                        {carrito.map((item, indice) => {
                            return (
                                <li key={indice}>
                                    <Card>

                                        <Card.Body>
                                            {item.description} - S/{item.price}.00 - Cantidad {item.cantidad} Subtotal: S/{item.price * item.cantidad}.00
                                            <Button variant="danger" onClick={() => removeItem(item.idd, item.cantidad, item.price)}>Borrar</Button></Card.Body>
                                    </Card>
                                </li>
                            )
                        })}
                    </ul>
                    <h1>Total: S/{precio_total}.00</h1>
                    

                    <NavLink to="/">
                        <Button variant="primary" onClick={finalizarCompra}>Terminar comprar</Button>
                    </NavLink>

                    <NavLink to="/formulariox" carrito={carrito}>
                        <Button variant="success"  >Seguir</Button>
                    </NavLink></>
            ) : <><p>No hay productos en el carrito</p>

                <NavLink to="/productos"><Button variant="warning">Volver a comprar</Button></NavLink>
                
            </>

            }




        </div>
    )
}

export default Carrito
