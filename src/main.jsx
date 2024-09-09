import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'
import './index.css'
import { CartContextProvider } from './components/CartContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <CartContextProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </CartContextProvider>,
)
