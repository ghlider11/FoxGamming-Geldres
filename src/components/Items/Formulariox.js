import { useState } from "react"
import { useContexto } from "../Context/CartContext"
import { NavLink } from "react-router-dom"


const Formulariox = () => {
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    
    const {  clear } = useContexto()
    const finalizarCompra = () => {
        console.log("Guardando la compra en la db...")
        clear()
    }


    const onNameChanges = (e) => {
        setName(e.target.value)
    }

    const onLastNameChanges = (e) => {
        setLastName(e.target.value)
    }

    const onEmailChanges = (e) => {
        setEmail(e.target.value)
    }

    console.log(`name ahora es: ${name}`)
    console.log(`lastName ahora es: ${lastName}`)
    console.log(`email ahora es: ${email}`)
    
    
    
    
    
    
    
    
    
    
    /*const finalizarCompra = () => {
        console.log("Guardando la compra en la db...")

        const ventasCollection = collection(db, "ventas")
        addDoc(ventasCollection,{
            buyer : {
                name : "Jefferson",
                lastName : "Geldres",
                email : "ghlider11@gmail.com"
            },
            items : carrito ,
            date : serverTimestamp(),
            total : 100
        })
        .then((resultado)=>{
            console.log(resultado)
            clear()
        })
    }*/

    return (
        <>
        <div>
            <label>Nombre</label>
            <input type="text" placeholder="nombre" onChange={onNameChanges}/>
            <label>Apellidos</label>
            <input type="text" placeholder="apellidos" onChange={onLastNameChanges} />
            <label>Email</label>
            <input type="text" placeholder="email" onChange={onEmailChanges} />
            
        </div>
        <NavLink to="/"><button  onClick={finalizarCompra}>Terminar comprar</button></NavLink>
        </>
    )
}

export default Formulariox
