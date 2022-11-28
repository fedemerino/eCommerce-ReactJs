import React, { useContext, useEffect, useState } from 'react'
import { contexto } from './CustomProvider';

const CarritoProductList = ({ prod, img, precio, id }) => {

    const { productos, setPrecio } = useContext(contexto)
    const producto = productos.filter((prod) => prod.id === id)
    const estandarUSD = Intl.NumberFormat('es-AR');
    const [cant, setCant] = useState(1)
    useEffect(() => { setPrecio(productos.reduce((total, prod) => { return total + prod.subtotal }, 0))},[])

    const handleSumar = () => {
        if (cant < 9) {
            setCant(cant + 1)
            setPrecio()
        }
    }

    const handleRestar = () => {
        if (cant > 0) {
            setCant(cant - 1)
            setPrecio()
        }
    }

    producto[0].cantidad = cant;
    producto[0].subtotal = cant * precio

    return (
        <div className="carritoCard">
            <div>
                <h6 className="card-title">{prod}</h6>
                <div className="card-body">

                    <div className='row'>
                        <div className='col-md-6'>
                            <img className="card-img-top" src={img}></img>
                        </div>
                        <div className='col-md-6 cardQuantity'>
                            <button className='buttonCounter' onClick={handleRestar}>-</button>
                            <input type='number' value={cant} readOnly></input>
                            <button className='buttonCounter' onClick={handleSumar}>+</button>
                        </div>
                        <div>
                            <p className='idText'>Subtotal: $ {estandarUSD.format(cant * precio)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarritoProductList