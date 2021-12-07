import Header from "./components/Header/Header"
import NavBar from "./components/NavBar/NavBar"
import Itemlistcontainer from "./components/Itemlistcontainer"
import "bootstrap/dist/css/bootstrap.min.css";

import React, { useState } from "react";
import Person from "./components/Person";



function App() {
    const imagenes = [
        {
            id: 1,
            src: 's',
            alt: 'Gatitos, no se puede decir más',
            nombre: 'Artículo 1',
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

    const [persons, setPersons] = useState([
        {
            id: 1,
            name: "Kevin",
            role: "Frontend Developer",
            img: "https://bootdey.com/img/Content/avatar/avatar2.png",
        },
        {
            id: 2,
            name: "Alex",
            role: "Backend Developer",
            img: "https://bootdey.com/img/Content/avatar/avatar3.png",
        },
        {
            id: 3,
            name: "Ben",
            role: "Designer",
            img: "https://bootdey.com/img/Content/avatar/avatar4.png",
        },
    ]);

    return (
        <>
            <Header nombre="horacio" />
            <NavBar />
            <Itemlistcontainer gretting="Hola mundo, este es mi proyecto de e-commerce"/>
            

        </>
    )
}

export default App