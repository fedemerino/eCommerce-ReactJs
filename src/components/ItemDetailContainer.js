import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { getProducts } from './utils'
import { toast } from 'react-toastify'

const ItemDetailContainer = () => {

    const [items, setItems] = useState([])
    const { id } = useParams()

    useEffect(() => {

        getProducts()
            .then((resp) => {
                setItems(resp)
                toast.dismiss()
            })
            .catch((error) => {
                console.log(error)
            })
    },[id])

    return (
        <div className='itemDetailContainer'>
            {items.length == 0 ? toast.info("Por favor espere...") : <ItemDetail items={items} id={id} />}
        </div>
    )
}

export default ItemDetailContainer