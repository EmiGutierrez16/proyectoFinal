import React, { useEffect, useRef, useState } from "react";
import Logo from "../assets/imagenes/logo.svg";
import Perfil from "../assets/imagenes/image-avatar.png";
import CartIcon from "../assets/imagenes/icons/icon-cart.svg";
import MenuIcon from "../assets/imagenes/icons/icon-menu.svg";
import Close from "../assets/imagenes/icons/icon-close.svg";
import "./BarraNavegacion.css";
import Carrito from "./Carrito";

const BarraNavegacion = ({
  productos,
  setProductos,
  abrirCarrito,
  setAbrirCarrito,
  cartCount,
  setCartCount,
}) => {
  const [open, setOpen] = useState(false);
  /*const [abrirCarrito, setAbrirCarrito] = useState(false);*/
  const carritoRef = useRef(null);

  // Función para cerrar el carrito si se hace clic fuera
  useEffect(() => {
    function handleClickOutside(e) {
      if (carritoRef.current && !carritoRef.current.contains(e.target)) {
        setAbrirCarrito(false);
      }
    }

    if (abrirCarrito) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [abrirCarrito, setAbrirCarrito]);

  return (
    <nav className="barra-navegacion">
      <div className="logo">
        <ul>
          {!open ? (
            <li className="menu-icon" onClick={() => setOpen(true)}>
              <img src={MenuIcon} alt="Menu-icon" />
            </li>
          ) : (
            <li onClick={() => setOpen(false)}>
              <img src={Close} alt="Close-icon" />
            </li>
          )}
          <li>
            <img src={Logo} alt="Logo" />
          </li>
        </ul>
      </div>
      <ul className={`menu ${open ? "activo" : ""}`}>
        <li>Colecciones</li>
        <li>Hombres</li>
        <li>Mujeres</li>
        <li>Acerca de</li>
        <li>Contacto</li>
      </ul>

      <div className="cart-perfil">
        <div className="carrito">
          <img
            src={CartIcon}
            alt="Carrito Icon"
            onClick={() => setAbrirCarrito(!abrirCarrito)}
          />
          {cartCount > 0 && <span className="contador">{cartCount}</span>}
        </div>
        {abrirCarrito && (
          <div className="carrito-contenedor" ref={carritoRef}>
            <Carrito
              productos={productos}
              setProductos={setProductos}
              cartCount={cartCount}
              setCartCount={setCartCount}
              setAbrirCarrito={setAbrirCarrito}
            />
          </div>
        )}
        <img className="perfil-img" src={Perfil} alt="img-perfil" />
      </div>
    </nav>
  );
};

export default BarraNavegacion;
/* {abrirCarrito && 
          <Carrito
            productos={productos}
            setProductos={setProductos}
            setCartCount={setCartCount}
            setAbrirCarrito={setAbrirCarrito}
          />
      }
)}*/
