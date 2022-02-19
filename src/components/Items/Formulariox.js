import { useContexto } from "../Context/CartContext"
import { NavLink } from "react-router-dom"
import { useForm } from "react-hook-form";
import { Button,Form  } from 'react-bootstrap';
import { addDoc, collection , serverTimestamp } from "firebase/firestore"
import { db } from "../firebase";



const Formulariox = ({carrito}) => {


    const { clear } = useContexto()
    const finalizarCompra = () => {
        console.log("Guardando la compra en la db...")
        
        const ventasCollection = collection(db, "ventas")
        addDoc(ventasCollection,{
            buyer : {
                name : "Jefferson",
                lastName : "Geldres",
                email : "JeffersonGeldres@gmail.com"
            },
            items : carrito ,
            date : serverTimestamp(),
            total : 100
        })
        .then((resultado)=>{
            clear()
        })
        
    }

const { register, handleSubmit, watch, formState: { errors } } = useForm();
const onSubmit = data => console.log(data);

console.log(watch("example")); //


    return (
        <>
            <div class="row">
            <div class="col-md-8">
            <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="nombre" {...register("required", { required: true })} />
                <Form.Label>Telefono</Form.Label>
                <Form.Control type="text" placeholder="Telefono" {...register("required", { required: true })} />
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" placeholder="email" {...register("required", { required: true })} />
                {errors.required && <span>Complete los campos solicitados</span>}
                
                </Form.Group>
                <NavLink to="/"><Button variant="success" type="submit" onClick={finalizarCompra}>Terminar comprar</Button></NavLink>
            </Form>
            </div>
            </div>
        </>

    )
}

export default Formulariox
