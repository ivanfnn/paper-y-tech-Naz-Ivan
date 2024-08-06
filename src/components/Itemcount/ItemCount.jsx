import React, { useEffect, useState } from 'react'
import './ItemCount.css'
import { Button} from '../Button'
import { ItemList} from '../ItemList'

export const ItemCount = () => {
    const [ count, setCount ] = useState(1)
    

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
    </div>
)
}