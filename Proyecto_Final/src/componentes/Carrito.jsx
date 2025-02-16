import React, { useState } from "react";
import trashIcon from "../assets/imagenes/icons/icon-delete.svg";
import close from "../assets/imagenes/icons/icon-close.svg";
import thumbnail1 from "../assets/imagenes/image-product-1-thumbnail.jpg";
import "./Carrito.css";

const Carrito = ({
  productos,
  setProductos,
  cartCount,
  setCartCount,
  setAbrirCarrito,
}) => {
  const eliminarProducto = (index, e) => {
    e.stopPropagation();
    e.preventDefault();
    const nuevosProductos = productos.filter((_, i) => i !== index);
    setProductos(nuevosProductos);

    const nuevaCantidad = nuevosProductos.reduce(
      (acc, p) => acc + p.cantidad,
      0
    );
    setCartCount(nuevaCantidad);
  };

  return (
    <div className="carrito-container" onClick={(e) => e.stopPropagation()}>
      <button className="cerrar-carrito" onClick={() => setAbrirCarrito(false)}>
        <img src={close} alt="cerrar" />
      </button>
      <h2 className="titulo">Carrito</h2>
      {productos.length === 0 ? (
        <p className="mensaje-vacio">Tu carrito está vacío.</p>
      ) : (
        <ul className="lista-productos">
          {productos.map((producto, index) => (
            <li key={index} className="producto">
              <img
                src={thumbnail1}
                alt={producto.nombre}
                className="imagen-producto"
              />
              <div className="detalles">
                <p className="nombre-producto">{producto.nombre}</p>
                <div className="precio-total">
                  <p className="precio-producto">
                    ${producto.precio} x {producto.cantidad}
                  </p>
                  <p className="total">
                    ${producto.precio * producto.cantidad}{" "}
                  </p>
                </div>
              </div>
              <button
                className="eliminar"
                onClick={(e) => eliminarProducto(index, e)}
              >
                <img src={trashIcon} alt="eliminar" />
              </button>
            </li>
          ))}
        </ul>
      )}
      <button
        className="boton-comprar"
        disabled={productos.length === 0}
        onClick={() => {
          setProductos([]);
          setCartCount(0);
          setAbrirCarrito(false);
          cartCount;
        }}
      >
        Finalizar compra
      </button>
    </div>
  );
};

export default Carrito;
