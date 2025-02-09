import React from "react";
import "./BarraNavegacion.css";

const BarraNavegacion = () => {
  return (
    <nav className="barra-navegacion">
      <div className="logo">sneakers</div>
      <ul className="menu">
        <li>Colecciones</li>
        <li>Hombres</li>
        <li>Mujeres</li>
        <li>Acerca de</li>
        <li>Contacto</li>
      </ul>
      <div className="iconos">
        <span className="carrito">🛒</span>
        <span className="perfil">👤</span>
      </div>
    </nav>
  );
};

export default BarraNavegacion;
