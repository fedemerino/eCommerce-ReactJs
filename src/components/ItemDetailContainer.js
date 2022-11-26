import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import {db} from '../firebase'
import { collection, getDocs } from 'firebase/firestore'

const productsCollection = collection(db, 'productos')
const consulta = getDocs(productsCollection)

const ItemDetailContainer = () => {

    const [items, setItems] = useState([])
    const { id } = useParams()

    useEffect(() => {

        consulta.then((res) => {
            const productos = res.docs.map(doc => ({ ...doc.data(), id: doc.id }))
            console.log(productos)
            setItems(productos)
          })
          consulta.catch((error) => (console.log(error)))
},[id])

    return (
        <div className='itemDetailContainer'>
            {items.length == 0 ? (toast.info("Por favor espere..."),setTimeout(()=> toast.dismiss(),600)) : <ItemDetail items={items} id={id} />}
        </div>
    )
}

export default ItemDetailContainer