import React from 'react'
import Item from './Item'


const ItemList = ({ items }) => {

  return (
    <div className='row cardsContainer'>
      {
        items.map((item) => {
          return <Item key={item.id} {...item} />
        })
      }
    </div>)

}

export default ItemList

