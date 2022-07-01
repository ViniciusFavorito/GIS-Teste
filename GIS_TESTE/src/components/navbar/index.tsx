import { createBrowserHistory } from "history"
import stylesNavbar from "./navbar.module.css"


export function Navbar() {

    const history = createBrowserHistory();

    return (
        <nav className="flex flex-row gap-24 px-40 py-24 bg-teste w-full  justify-between">
            <a href="/" className="flex flex-row justify-center items-center text-4xl text-white">
                <img src={"/assets/logo2.png"} alt="Logo" className="w-[120px]" />
                GIS Odontologia
            </a>
            <ul className="flex flex-row gap-16 pt-11 ">
                <li className="">
                    <a href="/home" className={` ${history.location.pathname === "/home" ? stylesNavbar.linkActive : stylesNavbar.link} text-2xl pt-11 text-white `}>Home</a >
                </li>
                <li>
                    <a href="/about" className={` ${history.location.pathname === "/about" ? stylesNavbar.linkActive : stylesNavbar.link} text-2xl pt-11 text-white `}>Sobre</a>
                </li>
                <li>
                    <a href="/contato" className={` ${history.location.pathname === "/contato" ? stylesNavbar.linkActive : stylesNavbar.link} text-2xl pt-11 text-white `}>Contato</a>
                </li>
                <li>
                    <a href="/login" className={` ${history.location.pathname === "/login" ? stylesNavbar.linkActive : stylesNavbar.link} text-2xl pt-11 text-white `}>Login</a>
                </li>
            </ul>
        </nav>
    );
}