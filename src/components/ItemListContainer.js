import React, { useEffect, useState } from 'react'
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { getProducts } from './utils'
import { toast } from 'react-toastify'

const ItemListContainer = () => {

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
  }, [id])

  return (
    <>
      {items.length == 0 ? toast.info("Cargando productos") : <ItemList items={items} id={id} />}
    </>
  )
}

export default ItemListContainer