import React from "react";
import { useLocation } from "react-router-dom";
// import logo from "./assets/logo.png"
import { createBrowserHistory } from "history"


export function Navbar(){


    const history = createBrowserHistory();
    // console.log(history.location.pathname)

    return(
        <nav className="nav">
            <a href="/" className="site-title"> 
                <img src={"/assets/logo.png"} alt="Logo" />
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
                {/* {history.location.pathname} */}
                <a href="/login">Login</a>
            </li>
          </ul>
        </nav>
    );
}