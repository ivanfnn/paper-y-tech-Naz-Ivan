import React, { useEffect, useState } from 'react'
import { getBooks } from '../asyncmock'
import { ItemList } from './ItemList'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { bf } from '../servicios/firebase/firebaseconfig'

export const ItemListContainer = ({ greetings}) => { 

const [items , setItems] = useState([])
const [loading , setLoading] = useState(true)
const {categoria} = useParams()

useEffect( () => {
//    if(categoria) {
//    getBooks().then(books => setItems(books.filter (element => element.categoria === categoria))).catch(error => error). finally(() => setLoading(false))
// }else{
//    getBooks().then(books=>setItems(books)).catch(error =>{console.error('Error :',error)}). finally(() => setLoading(false))
// }

if(categoria){
const productcat =  query(collection(bf,"productos"),where("categoria", "==", categoria))
getDocs(productcat).then(snapshot => {
   const products = snapshot.docs.map(doc => {
      const data = doc.data()
      return{id: doc.id, ...data}
   })
   setItems(products)
}).finally(setLoading(false))
}else {
   getDocs(collection(bf,"productos")).then(snapshot=>{
      const products = snapshot.docs.map(doc=>{
         const data = doc.data()
         return {id: doc.id, ...data}
      })
      setItems(products)
   }).finally(setLoading(false))
}
   }, [categoria])


if (loading){
   return (
      <h3>....🪫🪫Se esta cargando la pagina🪫🪫....</h3>
   )
}







   return (    
   <div className="most-read-books">    
      <h2>{greetings}</h2>
      <ItemList items={items}/>  
   </div> 
   )
   }