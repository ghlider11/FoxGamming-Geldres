import ItemDetail from "./ItemDetail"

const productoInicial = {
    nombre : "Camisa",
    precio : 50
}


const ItemDetailContainer = () => {

    /* let [producto, setProducto] = useState(null)

    useEffect(()=>{

        const promesa = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(productosIniciales)
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

    },[]) */
    

    return (
        <div>
            {/* <ItemDetail/> */}
            <ItemDetail producto={productoInicial}/>
        </div>
    )
}

export default ItemDetailContainer
