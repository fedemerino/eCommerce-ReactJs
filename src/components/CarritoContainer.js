import React, { useContext } from 'react'
import { contexto } from './CustomProvider'
import Carrito from './Carrito'

const CarritoContainer = () => {

    const { productos } = useContext(contexto)

    if (productos.length > 0) {
        return (
            <Carrito />
        )
    }
    else return(<h3 className='text-center'>¡El carrito está vacío!</h3>)

}

export default CarritoContainer