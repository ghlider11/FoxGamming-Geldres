import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from 'react-bootstrap';

const ItemCount = ({ stock, initial, onAdd, links, setCantidad, setMostrar }) => {

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

    const agregarItem = () => {

        setContador(initial)
        onAdd(contador)
    }


    return (
        <>
            <div id="counterContainer">

                <div id="counterContainer">
                    <Button variant="primary" onClick={restar}>-</Button>
                    <p className="counter"> {contador} </p>
                    <Button variant="primary" onClick={sumar}> + </Button>

                </div>
                <div>
                    <Link to={`/Carrito`}> <Button variant="outline-primary" onClick={agregarItem}>Agregar</Button></Link>
                </div>
            </div>


        </>

    )
}

export default ItemCount