import React from 'react'
import Item from './Item'
const ItemList = ({items}) => {
console.log(items)

  return (
    <div className='row'>
        {
            items.map((item)=>{
                return <Item key={item.id} {...item} />
            })
        }
        </div>  
  )
}

export default ItemList