import React, { useState } from "react";
import BarraNavegacion from "./componentes/BarraNavegacion";
import MostrarProducto from "./componentes/MostrarProducto";
import InformacionProducto from "./componentes/InformacionProducto";
import Carrito from "./componentes/Carrito";
import "./index.css";

const PaginaPrincipal = () => {
  const [productos, setProductos] = useState([]);
  const [mostrarCarrito, setMostrarCarrito] = useState(false);


  const agregarAlCarrito = (cantidad) => {
    const nuevoProducto = {
      nombre: "Zapatillas Edición Limitada",
      precio: 125.00,
      cantidad: cantidad,
      imagen: "/images/image-product-1.jpg", 
    };

    setProductos((prevProductos) => {
      const existe = prevProductos.find((p) => p.nombre === nuevoProducto.nombre);
      if (existe) {
        return prevProductos.map((p) =>
          p.nombre === nuevoProducto.nombre ? { ...p, cantidad: p.cantidad + cantidad } : p
        );
      }
      return [...prevProductos, nuevoProducto];
    });

    console.log(`Se agregaron ${cantidad} productos al carrito.`);
 
    <div>
      <BarraNavegacion />
      <div className="contenedor">
        <MostrarProducto />
        <InformacionProducto agregarAlCarrito={agregarAlCarrito} />
      </div>
      <Carrito productos={productos} />
    </div>
  
}

const toggleCarrito = () => {
  setMostrarCarrito((prev) => !prev);;
};
return (
  <div>
    <BarraNavegacion toggleCarrito={toggleCarrito} />

    <div className="contenedor">
      <MostrarProducto />
      <InformacionProducto agregarAlCarrito={agregarAlCarrito} />
    </div>

    {mostrarCarrito && <Carrito productos={productos} />}
  
  </div>
);
}

export default PaginaPrincipal;

  /*const PaginaPrincipal = () => {
    const [cart, setCart] = useState(0);
  
    const agregarAlCarrito = (cantidad) => {
      setCart((prevCart) => prevCart + cantidad);
    };

  return (
    <div>
      <BarraNavegacion />
      <div className="contenedor">
        <MostrarProducto />
        <InformacionProducto agregarAlCarrito={agregarAlCarrito}/>
      </div>
      <Carrito cart={cart}/>
    </div>
  );
};

export default PaginaPrincipal;*/
