import React, { createContext, useState, useContext } from "react";

// Creamos el contexto del carrito
const CartContext = createContext();

// Proveedor del carrito para envolver la app
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Función para añadir productos al carrito
  const addToCart = (producto, cantidad) => {
    setCart((prevCart) => {
      const existe = prevCart.find((item) => item.nombre_producto === producto.nombre_producto);
      if (existe) {
        return prevCart.map((item) =>
          item.nombre_producto === producto.nombre_producto
            ? { ...item, cantidad: item.cantidad + cantidad }
            : item
        );
      }
      return [...prevCart, { ...producto, cantidad }];
    });
  };

  // Función para actualizar cantidades
  const updateQuantity = (nombre_producto, cantidad) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.nombre_producto === nombre_producto ? { ...item, cantidad } : item
      )
    );
  };

  // Función para eliminar productos
  const removeFromCart = (nombre_producto) => {
    setCart((prevCart) => prevCart.filter((item) => item.nombre_producto !== nombre_producto));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook para acceder al carrito desde cualquier componente
export const useCart = () => useContext(CartContext);
