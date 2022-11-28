import React from 'react'
import { Route, Routes } from "react-router-dom"
import ItemListContainer from './ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer'
import CarritoContainer from './CarritoContainer'
import Error404 from './Error404'
const Main = () => {
    return (
        <main>
            <Routes>

                <Route path="/" element={<ItemListContainer />} />

                <Route path="/productos" element={<ItemListContainer />} />

                <Route path="/categoria/:id" element={<ItemListContainer />} />

                <Route path="/item/:id" element={<ItemDetailContainer />} />

                <Route path="/carrito" element={<CarritoContainer />} />

                <Route path="*" element={<Error404 />} />

            </Routes>
        </main>
    )
}

export default Main