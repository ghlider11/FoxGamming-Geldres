import React from 'react'
import Item from './Item'
import useStyles from './Items.styles'

const ItemList = ({lista}) =>{
    const styles = useStyles()
    return (
        <ul className={styles.container}>
       
            {lista.map((item,index)=>{
                return <Item key={index} item={item}/>
            }
            )}
       
        </ul>
    )
}
export default ItemList;