import React from "react";
import BarraNavegacion from "./componentes/BarraNavegacion";
import MostrarProducto from "./componentes/MostrarProducto";
import InformacionProducto from "./componentes/InformacionProducto";
import Carrito from "./componentes/Carrito";
import "./index.css";

const PaginaPrincipal = () => {
  return (
    <div>
      <BarraNavegacion />
      <div className="contenedor">
        <MostrarProducto />
        <InformacionProducto />
      </div>
      <Carrito />
    </div>
  );
};

export default PaginaPrincipal;
