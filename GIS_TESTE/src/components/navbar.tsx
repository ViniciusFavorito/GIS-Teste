import React from "react";
import logo from "./assets/logo.png"


export function Navbar(){

    return(
        <nav className="nav">
            <a href="/" className="site-title"> 
                GIS Odontologia
            </a>
          <ul >
            <li className="">
                <a href="/home">Home</a>
            </li>
            <li>
                <a href="/about">Sobre</a>
            </li>
            <li>
                <a href="/contato">Contato</a>
            </li>
            <li>
                <a href="/login">Login</a>
            </li>
          </ul>
        </nav>
    );
}