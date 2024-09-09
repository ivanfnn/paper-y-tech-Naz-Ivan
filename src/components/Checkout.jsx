import React, { useContext, useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { bf } from '../servicios/firebase/firebaseconfig'
import { CartContext } from './CartContext'
import './Checkout.css'


export const Checkout = () => {
    const [nombre, setNombre] = useState("");
    const [mail, setMail] = useState("");
    const [direccion, setDireccion] = useState("");
    const [order, setOrder] = useState({});
  
    const { cart } = useContext(CartContext);
  
    const submit = async (event) => {
      event.preventDefault();
      if (nombre && mail && direccion) {
        const user = {
          nombre,
          mail,
          direccion,
        };
        const data = { user, cart };
        const orderRef = collection(bf, "ordenes");
        const orderId = await addDoc(orderRef, data);
        setOrder(orderId.id);
      } else {
        alert("Por favor, complete todos los campos");
      }
    };
  
    return (
      <div className="checkout-container">
        <form onSubmit={submit}>
          <span>Nombre</span>
          <input type="text" onChange={(event) => setNombre(event.target.value)} />
          <span>Mail</span>
          <input type="email" onChange={(event) => setMail(event.target.value)} />
          <span>Direccion</span>
          <input type="text" onChange={(event) => setDireccion(event.target.value)} />
          <button type="submit">Confirmar</button>
        </form>
      </div>
    );
  };