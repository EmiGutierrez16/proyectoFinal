import React, { useEffect, useRef } from "react";
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
  const carritoRef = useRef(null);

  // Función para cerrar el carrito si se hace clic fuera
  useEffect(() => {
    function handleClickOutside(event) {
      if (carritoRef.current && !carritoRef.current.contains(event.target)) {
        setToggleCarrito(false);
      }
    }

    if (toggleCarrito) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleCarrito]);

  return (
    <nav className="barra-navegacion">
      <div className="logo">
        <ul>
          {!open && (
            <li onClick={() => setOpen(true)}>
              <img src={MenuIcon} alt="Menu-icon" />
            </li>
          )}
          {open && (
            <li onClick={() => setOpen(false)}>
              <img src={Close} alt="Close-icon" />
            </li>
          )}
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
      <div className="carrito">
  <img
    src={CartIcon}
    alt="Carrito Icon"
    onClick={() => setToggleCarrito(!toggleCarrito)}
  />
  {toggleCarrito && (
    <div className="carrito-contenedor">
      <Carrito productos={productos} />
    </div>
  )}
</div>
    </nav>
  );
};

export default BarraNavegacion;