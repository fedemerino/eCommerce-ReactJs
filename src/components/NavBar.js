import React from 'react'
import CartWidget from './CartWidget'
const NavBar = () => {
  return (
    <> 
      <header>
        <nav className='header'>
            <ul class="navBar">
                <li><a href="#"><img src="logo.png"></img></a></li>
                <li><a href="#">MENU</a></li>
                <li><a href="#">NUESTROS PRODUCTOS</a></li> 
                <CartWidget/> 
            </ul>  
        </nav>
      </header>      
    </>
  )
}

export default NavBar