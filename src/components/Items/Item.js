import React from'react'
import useStyles from './Items.styles'
import { Link } from "react-router-dom";
const Item = ({ item }) => {
    const styles = useStyles()
    return (

            <li className={styles.itemList}>
                <h3 className={styles.title}>{item.description}</h3>
                <p className={styles.price}>Precio : {item.price}</p>
                <img src={item.pictureUrl} alt="thumbnail" />
                <Link to={`/producto/${item.id}`} className='verdt'>
                <button >ver detalle</button>
                </Link>
            </li>

    )

}
export default Item