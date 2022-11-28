import React, { useContext } from 'react'

import { BiCopy } from 'react-icons/bi'
import { toast } from 'react-toastify'

const IdContainer = ({ id }) => {


    const handleCopy = () => {
        navigator.clipboard.writeText(id)
        toast.info("ID Copiada")

    }

    return (
        <div className='idContainer'>
            <p className='idText'>Compra realizada con éxito. ID:</p>
            <p>{id}        <BiCopy onClick={handleCopy} /></p>
            <p className='idText'>Recibirá un correo con su ID y los detalles de su compra</p>
        </div>
    )
}

export default IdContainer