import React from 'react'
import { Link } from "react-router-dom";
const Item = ({ item }) => {
    return (
        <>

            <div id="card">
                <img src={item.pictureurl} alt="thumbnail"  className="productImg" />
                <div className="infoContainer">
                    <h4 className="cardTitle">{item.description}</h4>
                    <h5 className="cardInfo">Precio : S/{item.price}.00</h5>
                    <Link to={`/producto/${item.id}`}>Ver Detalle</Link>
                </div>
            </div>
        </>

    )

}
export default Item