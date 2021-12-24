import Header from "./components/Header/Header"
import NavBar from "./components/NavBar/NavBar"
import Itemlistcontainer from "./components/Items/Itemlistcontainer";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemDetailContainer from "./components/Items/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home";
import Footer from "./components/Footer";
import Carrito from "./components/Carrito";

function App() {


    const linkds = [
        { href: "#", name: "inicio", id: 1 },
        { href: "#", name: "Productos", id: 2 },
        { href: "#", name: "Contactos", id: 3 },
        { href: "#", name: "Carrito", id: 4 }
    ]
    const links = [
        { href: "/productos", name: "productos", id: 1 },
        { href: "/categoria/Laptops", name: "Laptops", id: 2 },
        { href: "/categoria/Pcs", name: "Pcs", id: 3 }
    ]

    const foo = () => {
        console.log("soy foo")
    }



    const productos = [
        {
            id: 1,
            src: 's',
            alt: 'Gatitos, no se puede decir más',
            nombre: 'Artículo 1',
            stock: 10,
            precio: 52
        },
        {
            id: 2,
            src: 's',
            alt: 'Gatitos, no se puede decir más',
            nombre: 'Artículo 2',
            precio: 82
        },
        {
            id: 3,
            src: 's',
            alt: 'Gatitos, no se puede decir más',
            nombre: 'Artículo 3',
            precio: 99
        },
    ];


    return (


        <BrowserRouter>

            <Header nombre={"E-Commerce"} edad={1} links={links} foo={foo} />


            <main>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/productos" element={<Itemlistcontainer gretting={"Hola mundo, este es mi proyecto de e-commerce"} links={links}/>} />
                    {/*<Route path="/categoria/:id" element={<Itemlistcontainer greeting={"Bienvenido!"} />} />*/}
                    <Route path="/item/:id" element={<ItemDetailContainer/>} />
                    <Route path="/carrito" element={<Carrito />} />    
                </Routes>
            </main>
            <Footer/>
        </BrowserRouter>



    )
}

export default App