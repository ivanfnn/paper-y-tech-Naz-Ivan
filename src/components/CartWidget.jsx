import React, { useContext } from "react";
import './NavBar.css'
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";


const CartWidget = () => {
    const {cart} = useContext (CartContext)
    return (
        <Link to='/Cart'>
        <div className="link">
        🛒
        <span>{cart.length}</span>
        </div>
        </Link>
    );
}
export default CartWidget