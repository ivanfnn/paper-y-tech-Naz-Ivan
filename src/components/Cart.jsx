import React, { useContext } from 'react'
import { CartContext } from './CartContext'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
const {cart} = useContext (CartContext)


  return (
    <div>
    {cart.map(e=> {
      return (
        <CartItem key={e.id} producto={e}/>
      )
    })}
    <button onClick={vaciarCart}>Vaciar carrito</button>
    <Link to='/checkout'>Terminar Compra </Link>
    </div>
  )
}

export default Cart
