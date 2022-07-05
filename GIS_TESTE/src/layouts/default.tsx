import { Navbar } from "../components/navbar";

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



