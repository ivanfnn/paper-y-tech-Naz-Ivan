// import React, { useContext } from 'react'
// import { CartContext } from './CartContext'
// import { ItemCount } from './Itemcount/ItemCount'


// const ItemDetail = ({producto}) => {
//     const {cart , addToCart} = useContext (CartContext)
// const addCart = (cant) => {
//     const productoCantidad = {...producto, cant: cant}
//     addToCart(productoCantidad)

// };


// return (
//     <div className="most-read-books" >
//             <h3>{producto.nombre}</h3>
//             <p>{producto.precio}</p>
//             <p>{producto.detalle}</p>
//             <ItemCount addCart={addCart}/>

//         </div>
// )
// };

// export default ItemDetail;
import React, { useContext } from 'react'
import { ItemCount } from './Itemcount/ItemCount'
import { CartContext } from './CartContext'

const ItemDetail = ({producto}) => {
  const { cart, addToCart } = useContext(CartContext)

  const Agregar = (cant) => {
    const productoCantidad = {...producto, cant: cant}
    addToCart(productoCantidad)
  }

  return (
    <div className="most-read-books" >
      <h3>{producto.nombre}</h3>
      <img className='img' src={producto.image} alt="" />
      <p>{producto.precio}</p>
      <p>{producto.detalle}</p>
      <ItemCount Agregar={Agregar}/>
    </div>
  )
}

export default ItemDetail