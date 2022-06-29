import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";

    const Routes = () => {
       return(
           <BrowserRouter>
               <Route path="/" element={<Home />} />
               <Route path="/about" element={<About />} />
               <Route path="/contato/" element={<Contact />} />
               <Route path="/login" element={<Login />} />
           </BrowserRouter>
       )
    }
export default Routes;