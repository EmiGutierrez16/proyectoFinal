import React from "react";
import Logo from "../assets/imagenes/logo.svg";
import Perfil from "../assets/imagenes/image-avatar.png";
import CartIcon from "../assets/imagenes/icons/icon-cart.svg";
import "./BarraNavegacion.css";
import Carrito from "./Carrito";

const BarraNavegacion = ({ productos }) => {
  const [toggleCarrito, setToggleCarrito] = React.useState(false);
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
          <img
            src={CartIcon}
            alt="Carrito Icon"
            onClick={() => setToggleCarrito(!toggleCarrito)}
          />
          {toggleCarrito && <Carrito productos={productos}></Carrito>}
        </span>
        <span className="perfil">
          <img src={Perfil} alt="Perfil" />
        </span>
      </div>
    </nav>
  );
};

export default BarraNavegacion;
