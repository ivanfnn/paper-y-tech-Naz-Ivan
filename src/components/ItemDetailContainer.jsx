import React, { useEffect, useState } from 'react';
import { getBookById } from '../asyncmock';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import {getDoc, doc} from 'firebase/firestore'
import { bf } from '../servicios/firebase/firebaseconfig';


const ItemDetailContainer = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState({});
    const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);


    useEffect(() => { 
        setLoading(true);
        // setError(null);

        // getBookById(id)
        //     .then(producto => {
        //         setProducto(producto);
        //     })
        //     .catch(error => {
        //         console.error('Error de busqueda:', error);
        //         setError('Error de busqueda');
        //     })
        //     .finally(() => setLoading(false));

        const pRef = doc (bf, "productos", id)
        getDoc(pRef).then(snapshot => {
            setProducto(snapshot.data())
        }).finally(setLoading(false))

}, [id]);

    if (loading) {
        return <h1>Cargando....</h1>;
    }

    // if (error) {
    //     return <h1>{error}</h1>;
    // }

    if (!producto) {
        return <h1>No se encontró el producto.</h1>;
    }

    return (
    <div>
        {
            producto && 
            <ItemDetail producto={producto}/>
        }
    </div>
    );
};

export default ItemDetailContainer;