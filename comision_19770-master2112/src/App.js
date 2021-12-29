import { useState, useEffect } from 'react'
import Header from "./Header"
import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from './ItemDetailContainer'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./app.scss"
import Footer from './Footer'
import Home from "./Home"
import Carrito from "./Carrito"


function App() {

    let [show, setShow] = useState(false)

    const links = [
        { href: "/productos", name: "productos", id: 1 },
        { href: "/categoria/electronics", name: "electronics", id: 2 },
        { href: "/categoria/jewelery", name: "jewelery", id: 3 }
    ]

    return (
        <BrowserRouter>
            <Header nombre={"E-Commerce"} links={links} />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/productos" element={<ItemListContainer greeting={"Bienvenido!"} />} />
                    <Route path="/carrito" element={<Carrito />} />
                    <Route path="/categoria/:id" element={<ItemListContainer greeting={"Bienvenido!"} />} />
                    <Route path="/producto/:id" element={<ItemDetailContainer />} />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    )
}

export default App