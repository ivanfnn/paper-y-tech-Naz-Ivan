import React, { useContext, useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { bf } from '../servicios/firebase/firebaseconfig'
import { CartContext } from './CartContext'


const Checkout = () => {
    const [nombre, setNombre] = useState("")
    const [mail, setMail] = useState("")
    const [direccion, setDireccion] = useState("")
    const [order, setOrder] = useState({})

    // const {cart} = useContext (CartContext)
const {cart} = useContext (CartContext)

    const submit = async (element) => {
        element.preventDefault()
        const user = {
            nombre,
            mail,
            direccion,
        }
        const data = {user, cart}
        const orderRef = collection(bf, "ordenes")
        const orderId = await addDoc(orderRef, data)
        
        setOrder(orderId.id)


    }   
    
    console.log(order)

return (
    <div>
        <form onSubmit={(element)=>submit(element)}>
            <span>Nombre</span>
            <input type="text"  onChange={(element) => setNombre(element.target.value) }/>    
            <span>Mail</span>
            <input type="email"  onChange={(element) => setMail(element.target.value)}/>    
            <span>Direccion</span>
            <input type="number"  onChange={(element) => setDireccion(element.target.value)}/>    
            <button type='submit'>Confirmar</button>
        </form>    
    </div>
)
}

export default Checkout