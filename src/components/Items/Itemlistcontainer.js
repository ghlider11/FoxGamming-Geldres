import ItemCount from "./ItemCount"
import { useState , useEffect } from "react"
import ItemList from "./ItemList";
import ItemDetailContainer from "./ItemDetailContainer";
import { useParams } from "react-router-dom"
import { db } from "../firebase";
import { getDocs, query, collection , where } from "firebase/firestore"


console.log(db)
const onAdd = ()=>{
    console.log("Producto agregado")
}


const Itemlistcontainer = ({productoss},{gretting}) => {

    let [lista, setLista] = useState([])
    let { nombre } = useParams();
    console.log(nombre);

    useEffect(()=>{

        const productosCollection = collection(db, "productos")
        setTimeout(()=>{if (nombre) {

            const consulta = query(productosCollection,where("categoria","==",nombre),where("price",">",100))
            /* await */ getDocs(consulta)
                .then(({ docs }) => {
                    setLista(docs.map((doc) => ({ id: doc.id, ...doc.data() })))
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
        }},500)

        /*const promesa = new Promise((res)=>{
            setTimeout(()=>{
                if (nombre) {
                    res(productoss.filter(prod => prod.title === nombre));
                }else{
                    res(productoss);
                };
                
            },500)
        });
        promesa.then(prods => {
            setLista(prods);
        })*/

    },[nombre]);


    return (
        <>

            <main>
                
               <p className="grett"> {gretting} </p>
                
           

            </main>
            <ItemList lista={lista}/>
      

        </>
    )
}

export default Itemlistcontainer