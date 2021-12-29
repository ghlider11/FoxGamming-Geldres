import { useState, useEffect } from "react"
import ItemCount from "./ItemCount"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"

const productosIniciales = [
    { nombre: "Camisa", precio: 50 },
    { nombre: "Pantalon", precio: 100 },
    { nombre: "Zapatos", precio: 150 }
]

const ItemListContainer = ({ greeting }) => {

    let [lista, setLista] = useState([])
    const { id } = useParams()

    
    useEffect(() => {
        /* if(id){
            
        }else{

        } */
        const promesa = new Promise((res, rej) => {
            setTimeout(() => {
                res(productosIniciales)
            }, 2000)
        })

        promesa
            .then((productos) => {
                console.log("Todo bien")

                //if(id){

                //}else{
                setLista(productos)
                //}
            })
            .catch(() => {
                console.log("Todo mal")
            })

    }, [id])

    

    return (
        <div>
            <h2>{greeting}</h2>
            <ItemList lista={lista} />
        </div>
    )
}

export default ItemListContainer
