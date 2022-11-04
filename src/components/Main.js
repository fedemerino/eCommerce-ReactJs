import React from 'react'
import { Route, Routes} from "react-router-dom"
import ItemListContainer from './ItemListContainer'

const Main = () => {
    return (
        <main>
            <Routes>
                {/* Landing */}
                <Route path="/" element={<ItemListContainer/>}/>
                {/* Productos */}
                <Route path="/productos" element={<ItemListContainer/>}/>
                {/* Detalles */}
                <Route path="/productos/:id" element={<ItemListContainer/>}/>
                {/* Carrito */}
                <Route path="/carrito" element={<p>carrito</p>}/>
            </Routes>
        </main>
    )
}

export default Main