const Item = ({item}) => {
    return (
        <article>
            <h3>{item.nombre}</h3>
            <p>Precio : ${item.precio}</p>
            <button>ver detalle</button>
        </article>
    )
}

export default Item
