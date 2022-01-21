import Header from "./components/Header/Header"
import NavBar from "./components/NavBar/NavBar"
import Itemlistcontainer from "./components/Items/Itemlistcontainer";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemDetailContainer from "./components/Items/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home";
import Footer from "./components/Footer";
import Carrito from "./components/Carrito";
import productoss from "./components/productoss.json"
import CustomProvider, { Provider } from "./components/Context/CartContext";
import { createContext } from "react";
import Formulario from "./components/Items/Formulario";
import Formulariox from "./components/Items/Formulariox";


export const contextos =createContext({cantidad_total: 5, carrito : []})

function App() {

    
    const links = [
        { href: "/productos", name: "Productos", id: 1 },
        { href: "/categoria/Laptops", name: "Laptops", id: 2 },
        { href: "/categoria/Pcs", name: "Pcs", id: 3 }
    ]

    const foo = () => {
        console.log("soy foo")
    }



    const products = [
        {
            id: 1,
            title: 'Laptop',
            description: 'LAPTOP 2-EN-1 ADVANCE CN4050',
            price: 'S/.950.00',
            pictureUrl: 'laptop2 lenovo.PNG',

        },
        {
            id: 2,
            title: 'Laptop',
            description: 'CHROMEBOOK LENOVO S330',
            price: 'S/.1310.00',
            pictureUrl: 'laptop3hp.PNG',

        },
        {
            id: 3,
            title: 'Laptop',
            description: 'LAPTOP HP 240 G7, 14" HD',
            price: 'S/.1670.00',
            pictureUrl: 'laptop 1.PNG',

        },
        {
            id: 4,
            title: 'Laptop',
            description: 'LAPTOP 2-EN-1 ADVANCE CN4050',
            price: 'S/.950.00',
            pictureUrl: 'laptop2 lenovo.PNG',

        },
        {
            id: 5,
            title: 'Laptop',
            description: 'CHROMEBOOK LENOVO S330',
            price: 'S/.1310.00',
            pictureUrl: 'laptop3hp.PNG',

        },
        {
            id: 6,
            title: 'Laptop',
            description: 'LAPTOP HP 240 G7, 14" HD',
            price: 'S/.1670.00',
            pictureUrl: 'laptop 1.PNG',

        },
        {
            id: 7,
            title: 'Laptop',
            description: 'LAPTOP 2-EN-1 ADVANCE CN4050',
            price: 'S/.950.00',
            pictureUrl: 'laptop3hp.PNG',

        },
        {
            id: 8,
            title: 'Laptop',
            description: 'CHROMEBOOK LENOVO S330',
            price: 'S/.1310.00',
            pictureUrl: 'laptop2 lenovo.PNG',

        },
        {
            id: 9,
            title: 'Laptop',
            description: 'LAPTOP HP 240 G7, 14" HD',
            price: 'S/.1670.00',
            pictureUrl: 'laptop 1.PNG',

        },
        {
            id: 10,
            title: 'Laptop',
            description: 'LAPTOP 2-EN-1 ADVANCE CN4050',
            price: 'S/.950.00',
            pictureUrl: 'laptop3hp.PNG',

        },
        {
            id: 11,
            title: 'Laptop',
            description: 'CHROMEBOOK LENOVO S330',
            price: 'S/.1310.00',
            pictureUrl: 'laptop2 lenovo.PNG',

        },
        {
            id: 12,
            title: 'Laptop',
            description: 'LAPTOP HP 240 G7, 14" HD',
            price: 'S/.1670.00',
            pictureUrl: '/laptop 1.PNG',

        },
        {
            id: 13,
            title: 'Laptop',
            description: 'LAPTOP 2-EN-1 ADVANCE CN4050',
            price: 'S/.950.00',
            pictureUrl: 'laptop2 lenovo.PNG',

        },
        {
            id: 14,
            title: 'Laptop',
            description: 'CHROMEBOOK LENOVO S330',
            price: 'S/.1310.00',
            pictureUrl: 'laptop3hp.PNG',

        },
        {
            id: 15,
            title: 'Laptop',
            description: 'LAPTOP HP 240 G7, 14" HD',
            price: 'S/.1670.00',
            pictureUrl: 'laptop 1.PNG',

        },
        {
            id: 16,
            title: 'Laptop',
            description: 'LAPTOP 2-EN-1 ADVANCE CN4050',
            price: 'S/.950.00',
            pictureUrl: 'laptop3hp.PNG',

        },
        {
            id: 17,
            title: 'Laptop',
            description: 'CHROMEBOOK LENOVO S330',
            price: 'S/.1310.00',
            pictureUrl: 'laptop2 lenovo.PNG',

        },
        {
            id: 18,
            title: 'Laptop',
            description: 'LAPTOP HP 240 G7, 14" HD',
            price: 'S/.1670.00',
            pictureUrl: 'laptop3hp.PNG',

        },

    ];


   
    return (

        <CustomProvider>
        {/*<Provider value={valorDelContexto}>*/}

            <BrowserRouter>
                <Header nombre={"E-Commerce"} edad={1} links={links} foo={foo} />
                <main className="mainfo">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/productos" element={<Itemlistcontainer gretting={"Hola mundo, este es mi proyecto de e-commerce"} links={links} productoss={productoss} />} />
                        <Route path="/categoria/:nombre" element={<Itemlistcontainer greeting={"Bienvenido!"} productoss={productoss} />} />
                        <Route path="/carrito" element={<Carrito />} />
                        <Route path="/producto/:idd" element={<ItemDetailContainer productoss={productoss} />} />
                        <Route path="/formulariox" element={<Formulariox />} />
                    </Routes>
                </main>
                <Footer />
            </BrowserRouter>
        {/*</Provider>*/}
        </CustomProvider>



    )
}

export default App