import ItemCount from "./ItemCount"
import useStyles from './Items.styles'

const ItemDetail = ({lista}) => {
    const styles = useStyles()

    return (
        <article className={styles.detailtitle}>
            <h3>DETALLE</h3>
            <h3>Nombre: {lista[0].description}</h3>
            <h3>Precio : ${lista[0].price}</h3>
            
        </article>
    )
}


export default ItemDetail


