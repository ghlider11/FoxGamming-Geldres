import { Children, createContext, useContext, useState } from "react";

const contexto = createContext({cantidad_total : 5 , carrito : [

    {
    "id": "9",
    "title": "Laptops",
    "description": "LAPTOP HP 240 G7, 14 HD",
    "price": "S/.1670.00",
    "stock": "15",
    "pictureUrl": "/laptop 1.PNG"
    
    }
    
]})

export const { Provider} = contexto

export const useContexto = () => {
    return useContext(contexto)

}

const CustomProvider = ({children}) => {
    const [cantidad_total,setCantidadTotal] = useState(0)
    const [carrito,setCarrito] = useState([])

    const addItem = (item,cantidad) => {
        console.log("Soy el provider")
             console.log(item,cantidad)

                const copia_producto = {...item}
                copia_producto.cantidad = cantidad

        /*const copia = producto.slice(0)
        copia.push(producto)
        setCarrito(copia) */

        //setCarrito(producto.slice(0).push(producto))

        /* const copia = [...carrito]
        copia.push(producto)
        setCarrito(copia) */

        /* const copia = [...carrito,producto]
        setCarrito(copia) */

        setCarrito([...carrito,copia_producto])
        setCantidadTotal(cantidad_total + cantidad)
        
        //producto.cantidad = cantidad
        /* if(isInCarrito()){
            
        }else{

        } */
    }
    //BORRAR DEL CARRITO

    const removeItem = (id) => {
        //const nuevo_carrito = ?
        //setCarrito(estadoArray.filter())
        //setCarrito(estadoArray.map())
    }

    //LIMPIAR CARRITO

    const clear = () => {  setCarrito([])  }

    const isInCart = (id) => {
        //return true ? false
    }

    //VALOR DEL CONTEXTO

    const valorDelContexto = {
        cantidad_total , 
        carrito , 
        addItem , 
        removeItem ,
        clear
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