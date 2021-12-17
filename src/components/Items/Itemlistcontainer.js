import ItemCount from "./ItemCount"
import { useState , useEffect } from "react"
import ItemList from "./ItemList";

const onAdd = ()=>{
    console.log("Producto agregado")
}

const products = [
    {
        id: 1,
        title: 'Laptop',
        description: 'LAPTOP 2-EN-1 ADVANCE CN4050',
        price: 'S/.950.00',
        pictureUrl: 'url',
        
    },
    {
        id: 2,
        title: 'Laptop',
        description: 'CHROMEBOOK LENOVO S330',
        price: 'S/.1310.00',
        pictureUrl: 'url',
        
    },
    {
        id: 3,
        title: 'Laptop',
        description: 'LAPTOP HP 240 G7, 14" HD',
        price: 'S/.1670.00',
        pictureUrl: 'url',
        
    },
    
];

const Itemlistcontainer = ({gretting}) => {

    let [lista, setLista] = useState([])

    useEffect(()=>{

        const promesa = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(products)
            },2000)
        })
        
        promesa
        .then((productos)=>{
            console.log("Todo bien")
            setLista(productos)
        })
        .catch(()=>{
            console.log("Todo mal")
        })

    },[])

    return (
        <>

            <main>
                
               <p className="grett"> {gretting} </p>
                
                <ItemCount stock={5} initial={0} onAdd={onAdd}></ItemCount>

            </main>
            <ItemList lista={lista}/>



        </>
    )
}

export default Itemlistcontainer