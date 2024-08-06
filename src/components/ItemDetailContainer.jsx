import React, { useEffect, useState } from 'react';
import { getBookById } from '../asyncmock';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => { 
        setLoading(true);
        setError(null);

        getBookById(id)
            .then(producto => {
                setProducto(producto);
            })
            .catch(error => {
                console.error('Error de busqueda:', error);
                setError('Error de busqueda');
            })
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) {
        return <h1>Cargando....</h1>;
    }

    if (error) {
        return <h1>{error}</h1>;
    }

    if (!producto) {
        return <h1>No se encontró el producto.</h1>;
    }

    return (
        <div className="most-read-books" >
            <h3>{producto.nombre}</h3>
            <p>{producto.precio}</p>
            <p>{producto.detalle}</p>
        </div>
    );
};

export default ItemDetailContainer;