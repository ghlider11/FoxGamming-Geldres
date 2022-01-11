import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import "./ItemCount.css"

const ItemCount = ({ stock, initial, onAdd,links, setCantidad, setMostrar }) => {

    let [contador, setContador] = useState(1)

    const sumar = () => {


        if ((contador) < stock) {
            setContador(contador + 1)
        } else {

        }

    }

    const restar = () => {
        if ((contador) > 1) {
            setContador(contador - 1)
        } else {
            setContador(1) 
        }

    }
    /*const agregarItem = (e) => {
        onAdd(contador)
        setCantidad(contador)
        console.log("SE AGREGARON " + contador + " UNIDADES AL CARRITO")
        e.target.disabled = true
        setMostrar(true)

        setTimeout(() => {
            
          }, 3000);
    }*/
    const agregarItem = () => {
        console.log("Aca agrego un item con onAdd")
        setContador(initial)
        onAdd(contador)
    }


    

    return (
        <>
            
               {/* <h4>Producto: PC</h4>
                
               <h4>Stock: {stock}</h4>*/}
               <h4>{contador}</h4>
                    <button onClick={sumar}>SUMAR</button>
                
                    <button onClick={restar}>RESTAR</button>
               
                <Link to={`/Carrito`}> <button onClick={agregarItem}>Agregar</button></Link>
                

        </>

    )
}

export default ItemCount