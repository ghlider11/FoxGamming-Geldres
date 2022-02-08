import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom"
import { db } from "../firebase";
import { getDoc, doc, collection } from "firebase/firestore"

const ItemDetailContainer = () => {

    let { idd } = useParams();
    const [lista, setLista] = useState([])
    console.log(idd);

    useEffect(() => {

        const productsCollection = collection(db, "productos") 
         const refDoc = doc(productsCollection, idd) 
         getDoc(refDoc) 
             .then((result) => { 
                 const itemWithId = {...result.data(), idd} 
                 setLista(itemWithId) 
             }) 
             .catch((error) => { 
                 console.error(error) 
             }) 
  
  
     }, [idd]) 
    
    return (
        
        <div id="productsContainer">
        <h3 className="titleForContainers">Detalle del producto...</h3>
        <ItemDetail lista={lista} />
      </div>
    )
}

export default ItemDetailContainer