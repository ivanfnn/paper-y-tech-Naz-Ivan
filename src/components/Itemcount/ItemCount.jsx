import React, { useContext, useEffect, useState } from 'react'
import './ItemCount.css'
import { Button} from '../Button'
import { ItemList} from '../ItemList'
import { CartContext } from '../CartContext'

export const ItemCount = ({addCart}) => {
    const [ count, setCount ] = useState(1)
    
const {addToCart} = useContext (CartContext)
const restar = () =>{
    
    setCount(count - 1)
}



const sumar  = ()=> {
    
    setCount(count + 1)
}


return (
    <div className='container-btn'>
        <Button texto = '-' funcion ={restar}></Button> 
        <p>{count}</p>
        <Button texto = '+' funcion={sumar}></Button>   
        <Button texto = 'Agregar al carrito 🛒' funcion={addToCart}>🛒</Button>
    </div>
)
}