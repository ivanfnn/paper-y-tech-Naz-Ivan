import React from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import './NavBar.css'
import { useContext } from "react";
import { CartContext } from "./CartContext";





export const NavBar = () => {




    return (
      <div>
        <nav className="navbar">
          <div>
            <Link className="link" to="/">
              📖✏️
            </Link>
            <Link className="link" to="/categoria/ficcion">
              Ficcion
            </Link>
            <Link className="link" to="/categoria/no-ficcion">
              No Ficcion
            </Link>
            <Link className="link" to="/categoria/ciencia-ficcion">
              Ciencia Ficcion
            </Link>
            <Link className="link" to="/categoria/biografias">
              Biografias
            </Link>
          </div>
          <Link>
            <CartWidget />
          </Link>
        </nav>
      </div>
    );
  };