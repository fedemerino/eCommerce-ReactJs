import React from 'react'
import CartWidget from './CartWidget'
import { Link } from "react-router-dom"
const NavBar = () => {
  return (
      <header>
        <nav className='header'>
          <div>
            <ul className='navBoxes'>
              <li><Link to="/"><img src="logo.png" className='logo'></img></Link></li>
              <li><Link to="/productos">Productos</Link></li>
              <li><Link to="/">Ofertas</Link></li>
            </ul>
          </div>
          <div className='navBoxes'>
            <Link to="/carrito"><CartWidget /></Link>
          </div>
        </nav>
      </header>
  )
}

export default NavBar