import ItemCount from "./ItemCount"

const ItemDetail = ({producto}) => {

    const onAdd = (cantidad)=>{ 
        console.log("Soy onAdd desde ItemListContainer")
        console.log("Cantidad de items: " + cantidad)
        //setCantidad(cantidad)
    } 
    
    return (
        <div>
            <h1>Detalle de producto</h1>
            <p>Nombre: {/* producto.nombre */}</p>
            <p>Precio: ${/* producto.precio */}</p>
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </div>
    )
}

export default ItemDetail
