import React, { useEffect, useState } from 'react'
import { getBooks } from '../asyncmock'
import { ItemList } from './ItemList'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { bf } from '../servicios/firebase/firebaseconfig'



   export const ItemListContainer = ({ greetings }) => {
      const [items, setItems] = useState([]);
      const [loading, setLoading] = useState(true);
      const { categoria } = useParams();
    
      useEffect(() => {
        setLoading(true);
        if (categoria) {
          const productCat = query(collection(bf, "productos"), where("categoria", "==", categoria));
          getDocs(productCat).then((snapshot) => {
            const products = snapshot.docs.map((doc) => {
              const data = doc.data();
              return { id: doc.id, ...data };
            });
            setItems(products);
          }).finally(() => setLoading(false));
        } else {
          getDocs(collection(bf, "productos")).then((snapshot) => {
            const products = snapshot.docs.map((doc) => {
              const data = doc.data();
              return { id: doc.id, ...data };
            });
            setItems(products);
          }).finally(() => setLoading(false));
        }
      }, [categoria]);
    
      if (loading) {
        return <h3>....Cargando la pagina....</h3>;
      }
    
      return (
        <div className="most-read-books">
          <h2>{greetings}</h2>
          <ItemList items={items} />
        </div>
      );
    };