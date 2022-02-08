import Header from "./components/Header/Header"
import Itemlistcontainer from "./components/Items/Itemlistcontainer";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemDetailContainer from "./components/Items/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home";
import Footer from "./components/Footer";
import Carrito from "./components/Carrito";
import CustomProvider from "./components/Context/CartContext";
import { createContext } from "react";
import Formulariox from "./components/Items/Formulariox";


export const contextos =createContext({cantidad_total: 5, carrito : []})

function App() {

    
    const links = [
        { href: "/productos", name: "Productos", id: 1 },
        { href: "/categoria/Laptops", name: "Laptops", id: 2 },
        { href: "/categoria/Pcs", name: "Pcs", id: 3 }
    ]
   
    return (

        <CustomProvider>

            <BrowserRouter>
                <Header links={links} />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/productos" element={<Itemlistcontainer gretting={"Hola mundo, este es mi proyecto de e-commerce"} links={links} />} />
                        <Route path="/categoria/:nombre" element={<Itemlistcontainer greeting={"Bienvenido!"}  />} />
                        <Route path="/carrito" element={<Carrito />} />
                        <Route path="/producto/:idd" element={<ItemDetailContainer  />} />
                        <Route path="/formulariox" element={<Formulariox />} />
                    </Routes>
                </main>
                <Footer />
            </BrowserRouter>
        </CustomProvider>
    )
}

export default App