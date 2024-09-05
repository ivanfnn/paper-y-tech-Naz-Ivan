import React, { useContext } from 'react'
import { CartContext } from './CartContext'
import { ItemCount } from './Itemcount/ItemCount'
import Cart from './Cart'

const ItemDetail = ({producto}) => {
    const {cart , setCart, addToCart} = useContext (CartContext)
    console.log(cart)
const addcart = (cant) => {
    const productoCantidad = {...producto, cant:cant}
    addToCart(productoCantidad)

}


return (
    <div className="most-read-books" >
            <h3>{producto.nombre}</h3>
            <p>{producto.precio}</p>
            <p>{producto.detalle}</p>
            <ItemCount addcart={addcart}/>

        </div>
)
}

export default ItemDetail
