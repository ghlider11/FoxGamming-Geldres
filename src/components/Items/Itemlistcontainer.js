import { useState, useEffect } from "react"
import ItemList from "./ItemList";
import { useParams } from "react-router-dom"
import { db } from "../firebase";
import { getDocs, query, collection, where } from "firebase/firestore"

const Itemlistcontainer = ({ productoss }, { gretting }) => {
    let [lista, setLista] = useState([])
    let { nombre } = useParams();
    console.log(nombre);
    useEffect(() => {

        const productosCollection = collection(db, "productos")
        setTimeout(() => {
            if (nombre) {

                const consulta = query(productosCollection, where("categoria", "==", nombre), where("price", ">", 100))
                getDocs(consulta)
                    .then(({ docs }) => {
                        console.log(docs)
                        setLista(docs.map((doc) => ({ id: doc.id, ...doc.data() })))
                        console.log("e" + lista)

                    })
                    .catch((error) => {
                        console.log(error)
                    })

            } else {

                getDocs(productosCollection)
                    .then(({ docs }) => {
                        setLista(docs.map((doc) => ({ id: doc.id, ...doc.data() })))
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            }
        }, 500)

    }, );


    return (
        <>

            <div className="productsContainer">
                <h3 className="titleForContainers">Bienvenido(a)  a Fox Gamming</h3>
                <ItemList lista={lista} />
            </div>

        </>
    )
}

export default Itemlistcontainer