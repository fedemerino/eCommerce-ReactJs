import React from 'react'
import { Route, Routes } from "react-router-dom"
import ItemListContainer from './ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer'
const Main = () => {
    return (
        <main>
            <Routes>

                <Route path="/" element={<ItemListContainer />} />

                <Route path="/productos" element={<ItemListContainer />} />

                <Route path="/categoria/:id" element={<ItemListContainer />} />

                <Route path="/item/:id" element={<ItemDetailContainer />} />

                <Route path="productos/item/:id" element={<ItemDetailContainer />} />

                <Route path="categoria/placa/item/:id" element={<ItemDetailContainer />} />

                <Route path="categoria/procesador/item/:id" element={<ItemDetailContainer />} />

                <Route path="/carrito" element={<p>El carrito está vacío</p>} />
            </Routes>
        </main>
    )
}

export default Main