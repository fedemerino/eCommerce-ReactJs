import React from 'react'

const Item = ({ prod, img, id, precio, categoria, cantidad }) => {
    return (
        <div className='col-lg-3'>
            <div className='card'>
                <div className="tituloCard">
                    <p>{prod}</p>
                </div>
                <img src={img} />
                <p>Precio: ${precio}</p>
                <div className='detalles'>Ver detalles</div>
            </div>
        </div>
        )
}

            export default Item
