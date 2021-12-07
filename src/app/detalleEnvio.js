import React, { Component } from "react";
import { render } from "react-dom";
import NavBar from "./components/NavBar";
import Menu from "./components/Menu";
import DetalleEnvioContent from "./components/detalleEnvioContent"
render(<NavBar/>, document.getElementById('nav'));
render(<Menu/>, document.getElementById('menu'));
render(<DetalleEnvioContent/>, document.getElementById('cuerpoDetalleEnvio'));