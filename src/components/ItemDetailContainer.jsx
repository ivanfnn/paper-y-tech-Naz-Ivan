import React, { useEffect, useState } from 'react';
import { getBookById } from '../asyncmock';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import {getDoc, doc} from 'firebase/firestore'
import { bf } from '../servicios/firebase/firebaseconfig';




export const ItemDetailContainer = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState({});
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      setLoading(true);
      const pRef = doc(bf, "productos", id);
      getDoc(pRef).then((snapshot) => {
        setProducto(snapshot.data());
      }).finally(() => setLoading(false));
      return () => {
        setProducto({});
      };
    }, [id]);
  console.log(id)
    if (loading) {
      return <h1>Cargando....</h1>;
    }
  
    if (!producto) {
      return <h1>No se encontró el producto.</h1>;
    }
  
    return (
      <div>
        {producto && <ItemDetail producto={producto} />}
      </div>
    );
  };