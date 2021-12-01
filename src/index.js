//1) Necesitamos la variable React en scope
import React from "react"
//const React = require("react")

//2) Necesitamos la variable ReactDOM en scope
import ReactDOM from "react-dom"

//3) Necesitamos una aplicacion de React
import App from "./App"

import "./estilos.css"

//4) Necesitmos dibujar la aplicacion en el DOM
ReactDOM.render( <App/> ,document.getElementById("root"))