import React, { useState } from 'react'
import { Button } from './Button'
import { Link } from 'react-router-dom'
import { ItemCount } from './Itemcount/ItemCount'
import ItemDetailContainer from './ItemDetailContainer'

export const Item = ({Book}) => {
const [ver, setVer] = useState (false)

const verdetalles = () => {
    setVer(true)
}
return (
    <div className="most-read-books">
        <h3>{Book.nombre}</h3>
        <p>{Book.precio}</p>
        <p>{Book.categoria}</p> 
        {ver && <ItemDetailContainer id= {Book.id} /> }
        <Link to={'/detalle/'+ Book.id}>Ir a la pagina de detalles</Link>
        <ItemCount/>
    </div>
)
}