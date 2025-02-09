import React, { useState } from "react";
import "./MostrarProducto.css";

const MostrarProducto = () => {
  const [imagenActual, setImagenActual] = useState("imagen1.jpg");
  
  const imagenes = [
    "imagen1.jpg",
    "imagen2.jpg",
    "imagen3.jpg",
    "imagen4.jpg"
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
