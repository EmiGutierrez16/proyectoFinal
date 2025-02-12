import React, { useState } from "react";
import imagen1 from "../assets/imagenes/image-product-1.jpg";
import imagen2 from "../assets/imagenes/image-product-2.jpg";
import imagen3 from "../assets/imagenes/image-product-3.jpg";
import imagen4 from "../assets/imagenes/image-product-4.jpg";

import "./MostrarProducto.css"; 

const MostrarProducto = () => {
  const [imagenActual, setImagenActual] = useState(imagen1);
  
  const imagenes = [
    imagen1,
    imagen2,
    imagen3,
    imagen4,
  ];

  return (
    <div className="mostrar-producto">
      <img src={imagenActual} alt="Producto" className="imagen-principal" />
      <div className="miniaturas">
        {imagenes.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Miniatura ${index + 1}`}
            className="miniatura"
            onClick={() => setImagenActual(img)}
          />
        ))}
      </div>
    </div>
  );
};

export default MostrarProducto;