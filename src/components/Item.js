import React from 'react'
import { Link } from "react-router-dom"
const Item = ({ prod, img, precio}) => {
    let address = `/item/${prod}`
    return (
        <div className='col-lg-3 flex-center'>
            <div className='card'>
                <div className="tituloCard">
                    <p>{prod}</p>
                </div>
                <img src={img} />
                <p>Precio: ${precio}</p>
                <Link to={address}><button className='buttonCounter'>Ver Detalles</button></Link>
            </div>
        </div>
    )
}

export default Item
