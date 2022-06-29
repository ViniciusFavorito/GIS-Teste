import { createBrowserHistory } from "history"
import stylesNavbar from "./navbar.module.css"


export function Navbar() {

    const history = createBrowserHistory();

    return (
        <nav className="flex flex-row gap-24 px-40 py-24 bg-slate-500 w-full justify-between">
            <a href="/" className="flex flex-row justify-center items-center">
                <img src={"/assets/logo.png"} alt="Logo" className="w-[120px]" />
                GIS Odontologia
            </a>
            <ul className="flex flex-row gap-16 ">
                <li className="">
                    <a href="/home" className={` ${history.location.pathname === "/home" ? stylesNavbar.linkActive : stylesNavbar.link} `}>Home</a >
                </li>
                <li>
                    <a href="/about" className={` ${history.location.pathname === "/about" ? stylesNavbar.linkActive : stylesNavbar.link} `}>Sobre</a>
                </li>
                <li>
                    <a href="/contato" className={` ${history.location.pathname === "/contato" ? stylesNavbar.linkActive : stylesNavbar.link} `}>Contato</a>
                </li>
                <li>
                    <a href="/login" className={` ${history.location.pathname === "/login" ? stylesNavbar.linkActive : stylesNavbar.link} `}>Login</a>
                </li>
            </ul>
        </nav>
    );
}