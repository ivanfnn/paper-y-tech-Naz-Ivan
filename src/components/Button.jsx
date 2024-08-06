import React from 'react'
import './Button.css'

export const Button = ({ texto ,funcion}) => {
    return (
        <button className='boton'  onClick={funcion} >{texto}</button>
    );
}