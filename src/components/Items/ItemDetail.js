import ItemCount from "./ItemCount"
import useStyles from './Items.styles'
import { Link } from "react-router-dom";


const ItemDetail = ({ lista }) => {
    const styles = useStyles()

    return (
        <>
       
            <article className={styles.detailtitle}>
                <h3>DETALLE</h3>
                <h3>Nombre: {lista.description}</h3>
                <h3>Precio : ${lista.price}</h3>

            </article>
           
        </>
        
    )
}


export default ItemDetail


