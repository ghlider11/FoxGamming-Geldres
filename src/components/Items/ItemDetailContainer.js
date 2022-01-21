import ItemCount from "./ItemCount"
import { useState, useEffect } from "react"
import ItemList from "./ItemList";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom"
import { db } from "../firebase";
import { getDoc, doc, collection } from "firebase/firestore"

const ItemDetailContainer = ({productoss}) => {
    //let [lista, setLista] = useState([])
    let { idd } = useParams();
    const [lista, setLista] = useState([])
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
        <div>
            <ItemDetail lista={lista} />

        </div>
    )
}

export default ItemDetailContainer