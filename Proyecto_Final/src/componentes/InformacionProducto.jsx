import React, { useState } from "react";
import Sumar from '../assets/imágenes/icons/icon-plus.svg';
import Restar from '../assets/imágenes/icons/icon-minus.svg';
import "./InformacionProducto.css";


const InformacionProducto = ({ agregarAlCarrito }) => {
  /*const [cart, setCart] = useState(0);*/
  const [count, setCount] = useState(1);
    
    const handleOnClick = () => {
      agregarAlCarrito(count);
      console.log(`Productos agregados al carrito: ${count}`);
  };
  
    
    return (
      <div className="informacion-producto">
        <h2 className="marca">SNEAKER COMPANY</h2>
        <h1 className="titulo">Zapatillas Edición Limitada</h1>
        <p className="descripcion">
          Estas zapatillas de perfil bajo son el compañero perfecto para el uso
          casual. Con una suela de goma duradera, resisten cualquier clima.
        </p>
        <div className="precio">
          <span className="precio-actual">$125.00</span>
          <span className="descuento">50%</span>
          <span className="precio-original">$250.00</span>
        </div>

        <div className="acciones">
        <button className="boton-restar" onClick={() => setCount((prev) => Math.max(1, prev - 1))}>
          <img src={Restar} alt="restar" />
        </button>
        <span className="cantidad">{count}</span>
        <button className="boton-sumar" onClick={() => setCount((prev) => prev + 1)}>
          <img src={Sumar} alt="sumar" />
        </button>
        <button className="boton-agregar" onClick={handleOnClick}>
          🛒 Agregar al carrito
        </button>
      </div>
       
      </div>
    );
  };


export default InformacionProducto;