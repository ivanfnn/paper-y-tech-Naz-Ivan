// import './App.css'
// import { NavBar } from './components/NavBar'
// import { ItemListContainer } from './components/ItemListContainer'
// import { Button } from './components/Button'

const saludo = "Bienvenidos a paper y tech, donde estan todos tus libros favoritos"


// function App() {
  

//   return (
//     <>
//     <NavBar/>
//     <ItemListContainer greetings= {saludo}/>
//     <Button />
//     </>
//   )
// }

// export default App
import './App.css'
import Cart from './components/Cart'
import { CartContextProvider } from './components/CartContext'
import ItemDetailContainer from './components/ItemDetailContainer'
import {ItemListContainer} from './components/ItemListContainer'
import {NavBar} from './components/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


export function App() {

  return (
    <>
    <CartContextProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={ <ItemListContainer greeting={saludo} />}/>
            <Route path='/categoria/:categoria' element={ <ItemListContainer greeting={saludo} />}/>
            <Route path='/detalle/:id' element={<ItemDetailContainer/>} />
            <Route path='/Cart' element={<Cart/>} />
            <Route path='/Checkout' element={<Checkout/>} />
            <Route path='*' element={<h1>❌❌❌❌ERROR ESTA URL NO EXISTE INTENTALO DE NUEVO ❌❌❌❌</h1>} /> 
          </Routes>

        </BrowserRouter>
    </CartContextProvider>

    </>
  )
}