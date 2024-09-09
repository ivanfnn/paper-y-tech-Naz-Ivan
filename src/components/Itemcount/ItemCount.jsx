


import React, { useContext, useState } from 'react';
import './ItemCount.css';
import { Button } from '../Button';
import { CartContext } from '../CartContext';

export const ItemCount = ({Agregar}) => {
  const [count, setCount] = useState(1);
  // const { addToCart } = useContext(CartContext);

  const restar = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const sumar = () => {
    setCount(count + 1);
  };

  return (
    <div className="container-btn">
      <Button texto="-" funcion={restar} />
      <p>{count}</p>
      <Button texto="+" funcion={sumar} />
      <Button className='boton'
        texto="Agregar al carrito 🛒"
        funcion={() => Agregar(count)}
      />
    </div>
  );
};    