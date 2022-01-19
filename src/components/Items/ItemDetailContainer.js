import ItemCount from "./ItemCount"
import { useState, useEffect } from "react"
import ItemList from "./ItemList";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom"
import { db } from "../firebase";
import { getDoc, doc, collection } from "firebase/firestore"

const ItemDetailContainer = ({productoss}) => {
    let [lista, setLista] = useState([])
    let { idd } = useParams();
    console.log(idd);


    /*const getItem = () =>{
        const promesa = new Promise(res =>{
            setTimeout(()=>{
                res(productoss.find(prod=>prod.id===idd));
            }, 300);
        });
        promesa.then((prod) =>{
            setLista(prod);
        })
    }
    useEffect(() => getItem(), [idd])*/
    useEffect(() => {

        const productosCollection = collection(db, "productos")
        const refDoc = doc(productosCollection, idd)
        getDoc(refDoc)
            .then((resultado) => {
                setLista(resultado.data())
            })
            .catch((error) => {

            })
    }, [idd])
    
    return (
        <div>
            <ItemDetail lista={lista} />

        </div>
    )
}

export default ItemDetailContainer