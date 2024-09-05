import React, { useContext } from 'react'
import { CartContext } from './CartContext'

function CartItem(producto) {
    const {eliminarProducto} = useContext(CartContext)
  return (
    <div>
      <h3>{producto.nombre}</h3>
      <p>{producto.precio}</p>
      <p>{producto.cant}</p>
      <button onClick={()=> eliminarProducto.id}>elinar del carrito</button>
    </div>
    
  )
}

export default CartItem
