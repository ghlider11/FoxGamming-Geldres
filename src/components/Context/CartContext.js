import { Children, createContext, useContext, useState } from "react";

/*const contexto = createContext({cantidad_total : 5 , carrito : [

    {
    "id": "9",
    "title": "Laptops",
    "description": "LAPTOP HP 240 G7, 14 HD",
    "price": "S/.1670.00",
    "stock": "15",
    "pictureUrl": "/laptop 1.PNG"
    
    }
    
]})*/
const contexto = createContext()


export const { Provider} = contexto

export const useContexto = () => {
    return useContext(contexto)

}

const CustomProvider = ({children}) => {
    const [precio_total, setPrecioTotal] = useState(0)
    const [cantidad_total,setCantidadTotal] = useState(0)
    const [carrito,setCarrito] = useState([])

    const addItem = (item,cantidad) => {


        const id = item.id
        if (isInCart(id)) {
            const copia_del_carrito = [...carrito]
            let match = copia_del_carrito.find((p) => p.id === item.id)
            match.cantidad = match.cantidad + cantidad
            setCarrito(copia_del_carrito)
        } else {
            // en producto_con_cantidad se almacena los datos del producto (item) y a ello agregarle un nuevo campo cantidad
            const producto_con_cantidad = {
                ...item,
                cantidad
            }
            setCarrito([...carrito, producto_con_cantidad])
            
        }
        setCantidadTotal(cantidad_total + cantidad)
        setPrecioTotal(precio_total + (item.price * cantidad))


            /* console.log(item,cantidad)
             const id = producto.id

                const copia_producto = {...item}
                copia_producto.cantidad = cantidad

      
        setCarrito([...carrito,copia_producto])
        setCantidadTotal(cantidad_total + cantidad)*/

    }
    //BORRAR DEL CARRITO

    const removeItem = (id,cantidad,precio) => {
        let carritoFiltrado = carrito.filter(e => (e.id) !== id)
        setCarrito(carritoFiltrado)
        console.log("carrito fltrado prueba: "+carritoFiltrado)
        setCantidadTotal(cantidad_total - cantidad)
        setPrecioTotal(precio_total - (precio * cantidad))

        
    }

    //LIMPIAR CARRITO

    const clear = () => {  
        setCarrito([])
        setCantidadTotal(0)

    }

    const isInCart = (id) => {
        return carrito.some((p) => p.id === id)
    }

    //VALOR DEL CONTEXTO

    const valorDelContexto = {
        cantidad_total ,
        precio_total, 
        carrito , 
        addItem , 
        removeItem ,
        clear
    }
    const totalDelCarrito = (item,cantidad,precio) => {
        const copia_del_carrito = [...carrito]
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default CustomProvider


/*export const useContexto = () =>{
    return useContext(contexto)
}*/