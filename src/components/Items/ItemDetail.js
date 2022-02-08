import ItemCount from "./ItemCount"
import { useState} from "react"
import { useContexto } from "../Context/CartContext";

const ItemDetail = ({ lista }) => {

    let [mostrar] = useState(false)

    const { addItem } = useContexto()

    const onAdd = (cantidad) => {

        console.log("cantidad de unidades " + cantidad)
        addItem(lista, cantidad)
        console.log("cantidad de lista " + lista.description)
    }

    if (mostrar === false) {
        return (
            <>


                <div id="detailCard">
                    <div className="cardContainer">
                        <img src={lista.pictureurl} alt="thumbnail" className="productImg" />
                        <div className="infoContainer ">
           

                            <h4 className="cardTitle">Descripción del producto:</h4>
                            <h5 className="cardInfo">{lista.description}</h5>
                            <h5 className="cardPrice">Precio: S/{lista.price}.00</h5>
                            <h5 className="cardPrice">Stock disponible : {lista.stock}</h5>

                            <ItemCount stock={lista.stock} initial={1} onAdd={onAdd} />

                        </div>
                    </div>
                </div>
            </>

        )
    } else {
        return (
            <>
                <article>
                    <h3>DETALLE</h3>
                    <h3>Nombre: {lista.description}</h3>
                    <h3>Precio : {lista.price}</h3>
                    <h3>Precio : {lista.stock}</h3>
                    <img src={lista.pictureUrl} alt="thumbnail" />
                    <h2>Producto agregado. Ingrese unidades</h2>
                </article>
            </>

        )
    }

}
export default ItemDetail


