import ItemCount from "./ItemCount"
import useStyles from './Items.styles'
import { useState, useEffect } from "react"

import { Link } from "react-router-dom";
import { useContexto } from "../Context/CartContext";


const ItemDetail = ({ lista }) => {
    const styles = useStyles()
    /*let [cantidad, setCantidad] = useState("")*/
    let [mostrar, setMostrar] = useState(false)

    const { agregarAlCarrito} = useContexto()

    const onAdd = (cantidad) => {
        
        console.log("cantidad de unidades " + cantidad)
        agregarAlCarrito(cantidad,lista)
    }

    if (mostrar === false) {
        return (
            <>  
                <article className={styles.detailtitle}>
                    <h3>DETALLE</h3>
                    <h3>Nombre: {lista.description}</h3>
                    <h3>Precio : {lista.price}</h3>
                    <h3>Stock : {lista.stock}</h3>
                    <img src={lista.pictureUrl} alt="thumbnail" />
                   
    
                </article>      
                <ItemCount stock={lista.stock} initial={1} onAdd={onAdd}/>  
            </>
            
        )  
    }else{
        return (
            <>  
                <article className={styles.detailtitle}>
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


