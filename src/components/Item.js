import React from 'react'
import { Link } from "react-router-dom"
const Item = ({ prod, img, id, precio, categoria, cantidad }) => {
    let adress = `item/${prod}`
    return (
        <div className='col-lg-3'>
            <div className='card'>
                <div className="tituloCard">
                    <p>{prod}</p>
                </div>
                <img src={img} />
                <p>Precio: ${precio}</p>
                <Link to={adress}><button className='boton'>Ver Detalles</button></Link>
            </div>
        </div>
    )
}

export default Item
