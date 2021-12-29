import { useState } from "react"

const ItemCount = ({stock,initial,onAdd}) => {

    let [contador, setContador] = useState(initial)

    const sumar = () => {
        setContador(contador + 1)
    }

    const restar = () => {
        setContador(contador - 1)
    }

    const agregarItem = () => {
        console.log("Aca agrego un item con onAdd")
        setContador(initial)
        onAdd(contador)
    }

    return (
        <div>
            <p>Contador Actual : {contador}</p>
            <button onClick={sumar}>sumar</button>
            <button onClick={agregarItem}>agregar al carrito</button>
            <button onClick={restar}>restar</button>
        </div>
    )
}

export default ItemCount
