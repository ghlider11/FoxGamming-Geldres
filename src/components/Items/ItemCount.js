import React from "react"
import { useState } from "react"
import "./ItemCount.css"

const ItemCount = ({ stock, initial, onAdd,links }) => {

    let [contador, setContador] = useState(0)

    const sumar = () => {


        if ((contador) < stock) {
            setContador(contador + 1)
        } else {

        }

    }

    const restar = () => {
        if ((contador) > 0) {
            setContador(contador - 1)
        } else {
            setContador(0)
        }

    }
    

    return (
        <>
            
                <h4>Producto: PC</h4>
                
                <h4>Stock: {stock}</h4>
                <h4>{contador}</h4>
                    <button onClick={sumar}>SUMAR</button>
                
                    <button onClick={restar}>RESTAR</button>
               
                <button onClick={onAdd}>Agregar</button>
                

        </>

    )
}

export default ItemCount