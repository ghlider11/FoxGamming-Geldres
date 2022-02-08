import { useContexto } from "../Context/CartContext"
import { NavLink } from "react-router-dom"
import { useForm } from "react-hook-form";

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
         
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Nombre</label>
                <input type="text" placeholder="nombre" {...register("required", { required: true })} />
                <label>Telefono</label>
                <input type="text" placeholder="Telefono" {...register("required", { required: true })} />
                <label>Email</label>
                <input type="text" placeholder="email" {...register("required", { required: true })} />
                {errors.required && <span>Complete los campos solicitados</span>}
                <NavLink to="/"><button type="submit" onClick={finalizarCompra}>Terminar comprar</button></NavLink>
            </form>
        </>

    )
}

export default Formulariox
