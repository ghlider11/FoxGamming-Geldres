import { useContexto } from "../Context/CartContext"
import { NavLink } from "react-router-dom"
import { useForm } from "react-hook-form";
import { Button,Form  } from 'react-bootstrap';


const Formulariox = () => {


    const { clear } = useContexto()
    const finalizarCompra = () => {
        console.log("Guardando la compra en la db...")
        clear()
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
