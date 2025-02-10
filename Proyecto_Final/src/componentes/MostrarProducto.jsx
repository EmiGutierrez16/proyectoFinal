import React, { useState } from "react";
import "./MostrarProducto.css"; 

const MostrarProducto = () => {
  const [imagenActual, setImagenActual] = useState("image-product-2.jpg");
  
  const imagenes = [
     "src/assets/imagenes/image-product-1.jpg",
     "src/assets/imagenes/image-product-2.jpg",
     "src/assets/imagenes/image-product-3.jpg",
     "src/assets/imagenes/image-product-4.jpg",
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