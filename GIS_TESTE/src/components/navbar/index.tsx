import { useAuth } from "../../contexts/auth";
import { createBrowserHistory } from "history"
import stylesNavbar from "./navbar.module.css"


export function Navbar() {

    const history = createBrowserHistory();
    const { signed, logOut } = useAuth();

    return (
        <>
            <nav className="flex flex-row gap-24 px-40 py-24 bg-slate-900 w-full  justify-between items-center">
                <a href="/" className="flex flex-row justify-center items-center text-4xl text-white">
                    <img src={"/assets/logo2.png"} alt="Logo" className="w-[40px] mr-16 " />
                    <h4 className="heading-4 text-white">
                        GIS Odontologia
                    </h4>
                </a>
                <ul className="flex flex-row gap-16  ">
                    <li className="">
                        <a href="/" className={` ${history.location.pathname === "/" ? stylesNavbar.linkActive : stylesNavbar.link} text-2xl text-white `}>Home</a >
                    </li>
                    <li>
                        {
                            signed ? (
                                <button type="button" onClick={logOut} className={` ${history.location.pathname === "/login" ? stylesNavbar.linkActive : stylesNavbar.link} text-2xl  text-white `}>{signed ? "Logout" : "Login"}</button>
                            ) : (<a href="/login" className={` ${history.location.pathname === "/login" ? stylesNavbar.linkActive : stylesNavbar.link} text-2xl  text-white `}>{signed ? "Logout" : "Login"}</a>)

                        }
                    </li>

                </ul>
            </nav>

            {
                signed && (<nav className="flex flex-row justify-between items-center py-16 px-40 bg-slate-800">
                    <div></div>
                    <ul className="flex flex-row gap-16  ">
                        <li>
                            <a href="/newCall" className={` ${history.location.pathname === "/newCall" ? stylesNavbar.linkActive : stylesNavbar.link} text-base text-white `}>Novo Atendimento</a>
                        </li>
                        <li className="">
                            <a href="/dashboard" className={` ${history.location.pathname === "/dashboard" ? stylesNavbar.linkActive : stylesNavbar.link} text-base text-white `}>Meus Atendimentos</a >
                        </li>
                        <li>
                            <a href="/changePass" className={` ${history.location.pathname === "/changePass" ? stylesNavbar.linkActive : stylesNavbar.link} text-base text-white `}>Alterar Minha Senha</a>
                        </li>

                    </ul>
                </nav>)
            }

        </>
    );
}