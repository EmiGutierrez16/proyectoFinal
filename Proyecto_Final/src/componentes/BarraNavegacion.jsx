import React from "react";
import Logo from "../assets/imagenes/logo.svg";
import Perfil from "../assets/imagenes/image-avatar.png";
import CartIcon from "../assets/imagenes/icons/icon-cart.svg";
import MenuIcon from "../assets/imagenes/icons/icon-menu.svg";
import Close from "../assets/imagenes/icons/icon-close.svg";
import "./BarraNavegacion.css";
import Carrito from "./Carrito";

const BarraNavegacion = ({ productos }) => {
  const [toggleCarrito, setToggleCarrito] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  return (
    <nav className="barra-navegacion">
      <div className="logo">
        <ul>
          {!open && <li onClick={() => setOpen(true)}>
            <img src={MenuIcon} alt="Menu-icon" />
          </li>}
          {open && <li onClick={() => setOpen(false)}>
            <img src={Close} alt="Close-icon" />
          </li>}
          <li>
          <img src={Logo} alt="Logo" />
          </li>
        </ul>
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
