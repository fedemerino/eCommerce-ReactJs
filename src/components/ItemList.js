import React from 'react'
import Item from './Item'


const ItemList = ({ items, id }) => {
  const itemFiltrado = items.filter((item) => item.categoria == id)
  if (id == undefined) {
    return (
      <div className='row cardsContainer'>
        {
          items.map((item) => {
            return <Item key={item.id} {...item} />
          })
        }
      </div>
    )
  }
  else {
    return (
      <div className='row cardsContainer'>
        {
          itemFiltrado.map((item) => {
            return <Item key={item.id} {...item} />
          })
        }
      </div>)
  }


}

export default ItemList