import React, { useEffect, useState } from 'react'
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"

  let productos = [{
    "prod": "Procesador Intel Core i7 12700K 5.0 Ghz Alder Lake 1700 Sin Cooler",
    "categoria": "procesador",
    "img": "I7 12700k.png",
    "precio": 75.239,
    "cantidad": 1,
    "id": 1
  },
  {
    "prod": "Procesador Amd Ryzen 7 5800X 4.7 Ghz - AM4 Sin Cooler Sin Gpu",
    "categoria": "procesador",
    "img": "/Ryzen 7 5800X.png",
    "precio": 82.399,
    "cantidad": 1,
    "id": 2
  },
  {
    "prod": "Placa De Video GeForce RTX 3070 8Gb Msi Ventus 3x Plus",
    "categoria": "placa",
    "img": "Placa-De-Video-GeForce-RTX-3070-8Gb-Msi-Ventus-3x-Plus.png",
    "precio": 164.989,
    "cantidad": 1,
    "id": 3
  },
  {
    "prod": "Placa De Video GeForce RTX 3060 12Gb Gigabyte Gaming Oc",
    "categoria": "placa",
    "img": "Gigabyte RTX 3060 12Gb.png",
    "precio": 119.999,
    "cantidad": 1,
    "id": 4
  }]

const ItemListContainer = () => {

  const [items, setItems] = useState([])
  const {id} = useParams()
  
  useEffect(() => {
    let pedirProductos = new Promise((res) => {
      setTimeout(() => {
        res(productos)
      }, 2000)
    })

    pedirProductos
      .then((resp) => {
        setItems(resp)
      })
      .catch((error) => {
        console.log(error)
      })
  },[])

  return (
    <div>
      {items.length == 0 ? <h1>cargando...</h1> : <ItemList items={items} />}
    </div>
  )
}

export default ItemListContainer