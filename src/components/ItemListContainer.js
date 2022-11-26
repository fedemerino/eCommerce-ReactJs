import React, { useEffect, useState } from 'react'
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { toast } from 'react-toastify'
import { db } from '../firebase'
import { query, where, getDocs  } from "firebase/firestore"
import { collection } from 'firebase/firestore'

const productsCollection = collection(db, 'productos')

const ItemListContainer = () => {
  const [items, setItems] = useState([])
  const { id } = useParams()


  useEffect(() => {
    if (id) {
      const filter = query(productsCollection, where("categoria", "==", id))
      const consulta = getDocs(filter)
      consulta
        .then((res) => {
          const productos = res.docs.map(doc => ({ ...doc.data(), id: doc.id }))
          setItems(productos)
        })
        .catch((error) => {
          toast.error(error)
        })
    }

    else {
      const consulta = getDocs(productsCollection)
      consulta.then((res) => {
        const productos = res.docs.map(doc => ({ ...doc.data(), id: doc.id }))
        setItems(productos)
      })
      consulta.catch((error) => (toast.error(error)))
    }


  }, [id])

  return (
    <>
      {items.length == 0 ? (toast.info("Por favor espere..."),setTimeout(()=> toast.dismiss(),1000)) : <ItemList items={items} id={id} />}
    </>
  )
}

export default ItemListContainer