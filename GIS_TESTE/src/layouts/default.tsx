import { Navbar } from "../components/navbar";
// import {children} from ""

interface ILayoutDefault {
    children: React.ReactNode
}

export function LayoutDefault({ children }: ILayoutDefault) {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}



