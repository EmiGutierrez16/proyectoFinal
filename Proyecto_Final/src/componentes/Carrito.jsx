import React, { useState } from "react";
import "./Carrito.css";

const Carrito = () => {
  const [productos, setProductos] = useState([]);

  return (
    <div className="carrito-container">
      <h2 className="titulo">Carrito</h2>
      {productos.length === 0 ? (
        <p className="mensaje-vacio">Tu carrito está vacío.</p>
      ) : (
        <ul className="lista-productos">
          {productos.map((producto, index) => (
            <li key={index} className="producto">
              <img src={producto.imagen} alt={producto.nombre} className="imagen-producto" />
              <div className="detalles">
                <p className="nombre-producto">{producto.nombre}</p>
                <p className="precio-producto">${producto.precio} x {producto.cantidad}</p>
              </div>
              <button className="eliminar">✖</button>
            </li>
          ))}
        </ul>
      )}
      <button className="boton-comprar" disabled={productos.length === 0}>
        Finalizar compra
      </button>
    </div>
  );
};

export default Carrito;
