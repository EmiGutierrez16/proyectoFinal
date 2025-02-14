import React, { useState } from "react";
import imagen1 from "../assets/imagenes/image-product-1.jpg";
import imagen2 from "../assets/imagenes/image-product-2.jpg";
import imagen3 from "../assets/imagenes/image-product-3.jpg";
import imagen4 from "../assets/imagenes/image-product-4.jpg";
import "../componentes/MostrarProducto.css";

const MostrarProducto = () => {
  const imagenes = [imagen1, imagen2, imagen3, imagen4];
  const [imagenActual, setImagenActual] = useState(imagen1);
  const [lightboxAbierto, setLightboxAbierto] = useState(false);
  const [indiceActual, setIndiceActual] = useState(0);

  const abrirLightbox = (index) => {
    setIndiceActual(index);
    setImagenActual(imagenes[index]);
    setLightboxAbierto(true);
  };

  const cerrarLightbox = () => {
    setLightboxAbierto(false);
  };

  const cambiarImagen = (direccion) => {
    let nuevoIndice = indiceActual + direccion;
    if (nuevoIndice < 0) nuevoIndice = imagenes.length - 1;
    if (nuevoIndice >= imagenes.length) nuevoIndice = 0;
    setIndiceActual(nuevoIndice);
    setImagenActual(imagenes[nuevoIndice]);
  };

  return (
    <div className="mostrar-producto">
      <img
        src={imagenActual}
        alt="Producto"
        className="imagen-principal"
        onClick={() => abrirLightbox(indiceActual)}
      />
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

      {lightboxAbierto && (
        <div className="lightbox" onClick={cerrarLightbox}>
          <div className="lightbox-contenido" onClick={(e) => e.stopPropagation()}>
            <span className="cerrar" onClick={cerrarLightbox}>×</span>
            <button className="prev" onClick={() => cambiarImagen(-1)}>❮</button>
            <img src={imagenActual} alt="Producto ampliado" className="lightbox-imagen" />
            <button className="next" onClick={() => cambiarImagen(1)}>❯</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MostrarProducto;
