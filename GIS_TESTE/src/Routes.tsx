import React from "react";
import { Route, BrowserRouter, Routes as RoutesCustom } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import { CreateAccount } from "./pages/CreateAccount";
import { DashBoard } from "./pages/DashBoard";


const Routes = () => {
    return (
        <BrowserRouter>
            <RoutesCustom>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contato/" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/create_account" element={<CreateAccount />} />
                <Route path="/dashboard" element={<DashBoard />} />
            </RoutesCustom>
        </BrowserRouter>
    )
}

export default Routes;