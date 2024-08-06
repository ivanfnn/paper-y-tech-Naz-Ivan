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
        <Button texto ='Ver detalles' funcion={verdetalles}>
        <Link to={'/detalle/'+ Book.id}>Ver detalles</Link> 
        </Button>
        {ver ? <ItemDetailContainer id = {Book.id}/> : <p>click aqui</p> }
        <ItemCount/>
    </div>
)
}