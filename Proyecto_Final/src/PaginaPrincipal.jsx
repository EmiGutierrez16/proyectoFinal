import React, { useState, useEffect } from "react";
import BarraNavegacion from "./componentes/BarraNavegacion";
import MostrarProducto from "./componentes/MostrarProducto";
import InformacionProducto from "./componentes/InformacionProducto";
import Carrito from "./componentes/Carrito";
import "./PaginaPrincipal.css";
import "./index.css";

const PaginaPrincipal = () => {
  const [productos, setProductos] = useState([]);
  const [abrirCarrito, setAbrirCarrito] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const agregarAlCarrito = (cantidad) => {
    const nuevoProducto = {
      nombre: "Zapatillas Edición Limitada",
      precio: 125.0,
      cantidad,
      imagen: "image-product-1.jpg",
    };

    setProductos((prevProductos) => {
      const existe = prevProductos.find(
        (p) => p.nombre === nuevoProducto.nombre
      );
      if (existe) {
        return prevProductos.map((p) =>
          p.nombre === nuevoProducto.nombre
            ? { ...p, cantidad: p.cantidad + cantidad }
            : p
        );
      }
      return [...prevProductos, nuevoProducto];
    });

    setCartCount((prevCount) => prevCount + cantidad);
  };

  useEffect(() => {
    const totalCantidad = productos.reduce((total, p) => total + p.cantidad, 0);
    setCartCount(totalCantidad);
  }, [productos]);

  return (
    <>
      <BarraNavegacion
        productos={productos}
        setProductos={setProductos}
        abrirCarrito={abrirCarrito}
        setAbrirCarrito={setAbrirCarrito}
        cartCount={cartCount}
        /*setCartCount={setCartCount}*/
      >
      </BarraNavegacion>
      <div className="contenedor">
        <MostrarProducto />
        <InformacionProducto agregarAlCarrito={agregarAlCarrito} />
      </div>
    </>
  );
};

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
