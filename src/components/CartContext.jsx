

import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (producto) => {
    setCart([...cart, producto]);
    setTotal(total + producto.precio*producto.cant);
  };

  const vaciarCart = () => {
    setCart([]);
    setTotal(0);
  };

  const eliminarProducto = (id) => {
    const newCart = cart.filter((producto) => producto.id !== id);
    setCart(newCart);
    setTotal(total - cart.find((producto) => producto.id === id).precio);
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, vaciarCart, eliminarProducto, total }}>
      {children}
    </CartContext.Provider>
  );
};