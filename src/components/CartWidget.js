import React, { useContext } from 'react'
import { CgShoppingCart } from "react-icons/cg";
import { contexto } from "./CustomProvider"

const CartWidget = () => {

  const valorDelContexto = useContext(contexto)

  return (
    <div className='flex'>
      <div><CgShoppingCart size="2rem" /></div>
      <span className='itemCounter'>{valorDelContexto.cantidad}</span>
    </div>
  )
}

export default CartWidget 