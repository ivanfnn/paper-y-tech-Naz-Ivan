

import React, { useContext } from 'react'
import { CartContext } from './CartContext'
import {CartItem} from './CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
  const { cart, vaciarCart, total,} = useContext(CartContext)
  console.log(cart)
  return (
    <div>
      {cart.map(e => {
        return (
          <CartItem key={e.id} producto={e} />
        )
      })}
      <p>Total: ${total}</p>
      <button className='boton' onClick={vaciarCart}>Vaciar carrito</button>
      <Link className='boton' to='/checkout'>Terminar Compra </Link>
    </div>
  )
}

export default Cart
