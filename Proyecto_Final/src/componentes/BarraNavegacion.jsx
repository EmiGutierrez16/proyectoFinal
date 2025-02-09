import React from "react";
import Logo from '../assets/imágenes/logo.svg'
import Perfil from '../assets/imágenes/image-avatar.png';
import CartIcon from '../assets/imágenes/icons/icon-cart.svg'
import "./BarraNavegacion.css";

const BarraNavegacion = () => {
  return (
    <nav className="barra-navegacion">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <ul className="menu">
        <li>Colecciones</li>
        <li>Hombres</li>
        <li>Mujeres</li>
        <li>Acerca de</li>
        <li>Contacto</li>
      </ul>
      <div className="iconos">
  <span className="carrito">
    <img src={CartIcon} alt="Carrito Icon" />
  </span>
  <span className="perfil">
    <img src={Perfil} alt="Perfil" />
  </span>
</div>
    </nav>
  );
};

export default BarraNavegacion;
