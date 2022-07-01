import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/auth"


export function DashBoard() {

    const { signed } = useAuth()
    const navegate = useNavigate();

    useEffect(() => {
        if (!signed) {
            navegate("/login")
        }
    }, [])

    return (

        <div>
            Nosso cliente tem uma clínica odontológica e por isso precisa de um sistema <br />
            <br />
            para cadastrar seus paciente e GIS vai lhe ajudar<br />
            <br />
            Alguns requisitos funcionais:<br />
            <br />
            - Tela de Login<br />
            - Alteração de Senha<br />
            - Cadastro paciente<br />
            : Nome<br />
            : Telefone<br />
            : Endereço<br />
            : Data da consulta<br />
            <br />
            : Dentista que será responsável pelo atendimento<br />
            : Observação (O que o paciente precisa)<br />
            Há, todos esses dados podemos alterar, excluir e inserir.<br />

        </div>
    )
}