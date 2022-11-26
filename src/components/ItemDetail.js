import React from 'react'
import ItemProcesador from './ItemProcesador'
import ItemPlaca from './ItemPlaca'


const ItemDetail = ({ items, id }) => {

  const itemFiltrado = items.find((item) => item.prod == id)
  if (itemFiltrado.categoria == "procesador") {
    return (<ItemProcesador itemFiltrado={itemFiltrado} />)
  }
  else {
    return (<ItemPlaca itemFiltrado={itemFiltrado} />)
  }
}

export default ItemDetail