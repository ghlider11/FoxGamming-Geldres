import ItemCount from "./ItemCount"
import { useState , useEffect } from "react"
import ItemList from "./ItemList";
import ItemDetailContainer from "./ItemDetailContainer";
import { useParams } from "react-router-dom"
const onAdd = ()=>{
    console.log("Producto agregado")
}

const products = [
    {
        id: 1,
        title: 'Laptop',
        description: 'LAPTOP 2-EN-1 ADVANCE CN4050',
        price: 'S/.950.00',
        pictureUrl: 'laptop2 lenovo.PNG',
        
    },
    {
        id: 2,
        title: 'Laptop',
        description: 'CHROMEBOOK LENOVO S330',
        price: 'S/.1310.00',
        pictureUrl: 'laptop3hp.PNG',
        
    },
    {
        id: 3,
        title: 'Laptop',
        description: 'LAPTOP HP 240 G7, 14" HD',
        price: 'S/.1670.00',
        pictureUrl: 'laptop 1.PNG',
        
    },
    {
        id: 4,
        title: 'Laptop',
        description: 'LAPTOP 2-EN-1 ADVANCE CN4050',
        price: 'S/.950.00',
        pictureUrl: 'laptop2 lenovo.PNG',
        
    },
    {
        id: 5,
        title: 'Laptop',
        description: 'CHROMEBOOK LENOVO S330',
        price: 'S/.1310.00',
        pictureUrl: 'laptop3hp.PNG',
        
    },
    {
        id: 6,
        title: 'Laptop',
        description: 'LAPTOP HP 240 G7, 14" HD',
        price: 'S/.1670.00',
        pictureUrl: 'laptop 1.PNG',
        
    },
    {
        id: 7,
        title: 'Laptop',
        description: 'LAPTOP 2-EN-1 ADVANCE CN4050',
        price: 'S/.950.00',
        pictureUrl: 'laptop3hp.PNG',
        
    },
    {
        id: 8,
        title: 'Laptop',
        description: 'CHROMEBOOK LENOVO S330',
        price: 'S/.1310.00',
        pictureUrl: 'laptop2 lenovo.PNG',
        
    },
    {
        id: 9,
        title: 'Laptop',
        description: 'LAPTOP HP 240 G7, 14" HD',
        price: 'S/.1670.00',
        pictureUrl: 'laptop 1.PNG',
        
    },
    {
        id: 10,
        title: 'Laptop',
        description: 'LAPTOP 2-EN-1 ADVANCE CN4050',
        price: 'S/.950.00',
        pictureUrl: 'laptop3hp.PNG',
        
    },
    {
        id: 11,
        title: 'Laptop',
        description: 'CHROMEBOOK LENOVO S330',
        price: 'S/.1310.00',
        pictureUrl: 'laptop2 lenovo.PNG',
        
    },
    {
        id: 12,
        title: 'Laptop',
        description: 'LAPTOP HP 240 G7, 14" HD',
        price: 'S/.1670.00',
        pictureUrl: '/laptop 1.PNG',
        
    },
    {
        id: 13,
        title: 'Laptop',
        description: 'LAPTOP 2-EN-1 ADVANCE CN4050',
        price: 'S/.950.00',
        pictureUrl: 'laptop2 lenovo.PNG',
        
    },
    {
        id: 14,
        title: 'Laptop',
        description: 'CHROMEBOOK LENOVO S330',
        price: 'S/.1310.00',
        pictureUrl: 'laptop3hp.PNG',
        
    },
    {
        id: 15,
        title: 'Laptop',
        description: 'LAPTOP HP 240 G7, 14" HD',
        price: 'S/.1670.00',
        pictureUrl: 'laptop 1.PNG',
        
    },
    {
        id: 16,
        title: 'Laptop',
        description: 'LAPTOP 2-EN-1 ADVANCE CN4050',
        price: 'S/.950.00',
        pictureUrl: 'laptop3hp.PNG',
        
    },
    {
        id: 17,
        title: 'Laptop',
        description: 'CHROMEBOOK LENOVO S330',
        price: 'S/.1310.00',
        pictureUrl: 'laptop2 lenovo.PNG',
        
    },
    {
        id: 18,
        title: 'Laptop',
        description: 'LAPTOP HP 240 G7, 14" HD',
        price: 'S/.1670.00',
        pictureUrl: 'laptop3hp.PNG',
        
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
                
                <ItemCount stock={5} initial={1} onAdd={onAdd}></ItemCount>

            </main>
            <ItemList lista={lista}/>
            <ItemDetailContainer/>



        </>
    )
}

export default Itemlistcontainer