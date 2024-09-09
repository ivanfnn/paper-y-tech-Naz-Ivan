import React, { useContext } from 'react'
import { CartContext } from './CartContext'


export const CartItem = ( {producto} ) => {
  console.log(producto)
  const { eliminarProducto } = useContext(CartContext);

  return (
    <div className="most-read-books">
      <h3>{producto.nombre}</h3>
      <img className='img' src={producto.image} alt="" />
      <p>${producto.precio}</p>
      <p>{producto.cant}</p>
      <button className='boton' onClick={() => eliminarProducto(producto.id)}>Eliminar del carrito</button>
    </div>
  );
};