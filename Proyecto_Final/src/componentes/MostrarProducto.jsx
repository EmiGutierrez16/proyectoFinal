import React, { useState } from "react";
import imagen1 from "../assets/imagenes/image-product-1.jpg";
import imagen2 from "../assets/imagenes/image-product-2.jpg";
import imagen3 from "../assets/imagenes/image-product-3.jpg";
import imagen4 from "../assets/imagenes/image-product-4.jpg";
import thumbnail1 from "../assets/imagenes/image-product-1-thumbnail.jpg";
import thumbnail2 from "../assets/imagenes/image-product-2-thumbnail.jpg";
import thumbnail3 from "../assets/imagenes/image-product-3-thumbnail.jpg";
import thumbnail4 from "../assets/imagenes/image-product-4-thumbnail.jpg";
import "../componentes/MostrarProducto.css";

/*const MostrarProducto = () => {
  const [abrir, setAbrir] = useState(false);
  const [mainImage, setMainImage] = useState(imagen1);
  const [imgIndex, setImgIndex] = useState(0);

  const handleThumbClick = (e) => {
    setMainImage(() => e.target.dataset.url);
    setImgIndex(() => e.target.dataset.index);
  };

  return (
    <div className="galeria">
      <div className="wrapper">
        <div className="main-img">
          <img
            src={mainImage}
            alt="championes"
            onClick={() => setAbrir(true)}
          />
        </div>

        <div className="thumbnails">
          <img
            className={mainImage === imagen1 ? "active-thumb" : ""}
            src={thumbnail1}
            alt="championcitos"
            data-url={imagen1}
            data-index="0"
            onClick={handleThumbClick}
          />
          <img
            className={mainImage === imagen2 ? "active-thumb" : ""}
            src={thumbnail2}
            alt="championcitos"
            data-url={imagen2}
            data-index="1"
            onClick={handleThumbClick}
          />
          <img
            className={mainImage === imagen3 ? "active-thumb" : ""}
            src={thumbnail3}
            alt="championcitos"
            data-url={imagen3}
            data-index="2"
            onClick={handleThumbClick}
          />
          <img
            className={mainImage === imagen4 ? "active-thumb" : ""}
            src={thumbnail4}
            alt="championcitos"
            data-url={imagen4}
            data-index="3"
            onClick={handleThumbClick}
          />
        </div>
      </div>

      <Lightbox
        abrir={abrir}
        cerrar={() => setAbrir(false)}
        index={imgIndex}
        slides={[
          {
            src: imagen1,
            alt: "imagen 1",
            width: 500,
            height: "auto",
          },
          {
            src: imagen2,
            alt: "imagen 2",
            width: 500,
            height: "auto",
          },
          {
            src: imagen3,
            alt: "imagen 3",
            width: 500,
            height: "auto",
          },
          {
            src: imagen4,
            alt: "imagen 4",
            width: 500,
            height: "auto",
          },
        ]}
      />
    </div>
  );
};*/
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
  const handleThumbClick = (e) => {
    setImagenActual(() => e.target.dataset.url);
    setIndiceActual(() => e.target.dataset.index);
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
      <div className="wrapper">
        <div className="main-image">
          <img
            src={imagenActual}
            alt="Producto"
            className="imagen-principal"
            onClick={() => abrirLightbox(indiceActual)}
          />
        </div>
        <div className="miniaturas">
          <img
            className={imagenActual === imagen1 ? "active-thumbnail" : ""}
            src={thumbnail1}
            alt="tenis"
            data-url={imagen1}
            data-index="0"
            onClick={handleThumbClick}
          />
          <img
            className={imagenActual === imagen2 ? "active-thumbnail" : ""}
            src={thumbnail2}
            alt="tenis"
            data-url={imagen2}
            data-index="1"
            onClick={handleThumbClick}
          />
          <img
            className={imagenActual === imagen3 ? "active-thumbnail" : ""}
            src={thumbnail3}
            alt="tenis"
            data-url={imagen3}
            data-index="2"
            onClick={handleThumbClick}
          />
          <img
            className={imagenActual === imagen4 ? "active-thumbnail" : ""}
            src={thumbnail4}
            alt="tenis"
            data-url={imagen4}
            data-index="3"
            onClick={handleThumbClick}
          />
        </div>
      </div>

      {lightboxAbierto && (
        <div className="lightbox" onClick={cerrarLightbox}>
          <div
            className="lightbox-contenido"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="cerrar" onClick={cerrarLightbox}>
              ×
            </span>
            <button className="prev" onClick={() => cambiarImagen(-1)}>
              ❮
            </button>
            <img
              src={imagenActual}
              alt="Producto ampliado"
              className="lightbox-imagen"
            />
            <button className="next" onClick={() => cambiarImagen(1)}>
              ❯
            </button>
            <div className="lightbox-thumbs">
              <img
                className={imagenActual === imagen1 ? "active-thumbnail" : ""}
                src={thumbnail1}
                alt="tenis"
                data-url={imagen1}
                data-index="0"
                onClick={handleThumbClick}
              />
              <img
                className={imagenActual === imagen2 ? "active-thumbnail" : ""}
                src={thumbnail2}
                alt="tenis"
                data-url={imagen2}
                data-index="1"
            onClick={handleThumbClick}
              />
              <img
                className={imagenActual === imagen3 ? "active-thumbnail" : ""}
                src={thumbnail3}
                alt="tenis"
                data-url={imagen3}
                data-index="2"
            onClick={handleThumbClick}
              />
              <img
                className={imagenActual === imagen4 ? "active-thumbnail" : ""}
                src={thumbnail4}
                alt="tenis"
                data-url={imagen4}
                data-index="3"
            onClick={handleThumbClick}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MostrarProducto;
