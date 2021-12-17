import React from'react'
import useStyles from './Items.styles'
const Item = ({ item }) => {
    const styles = useStyles()
    return (

            <li className={styles.itemList}>
                <h3 className={styles.title}>{item.description}</h3>
                <p className={styles.price}>Precio : ${item.price}</p>
                <button>ver detalle</button>
            </li>







    )

}
export default Item