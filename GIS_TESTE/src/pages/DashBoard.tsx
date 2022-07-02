import { useEffect, useState } from "react"
import { useAuth } from "../contexts/auth"
import { ICreateCall } from "../services/createCallService";
import { deleteCall } from "../services/deleteCallService";
import { getCalls } from "../services/getCallsService";
import logo from '/assets/background2.jpg'


export function DashBoard() {

    const [listCalls, setListCalls] = useState<ICreateCall[]>([] as ICreateCall[]);
    const { user } = useAuth()
    useEffect(() => {
        setListCalls(getCalls())
    }, [])

    var sectionStyle = {
        width: "100%",
        height: "calc(100vh - 88px - 56px)",
        backgroundImage: `url(${logo})`,
        backgroundPosition: "center"
    };

    const handleDeleteCall = (id: number) => {
        const newCalls = deleteCall(id);
        setListCalls(newCalls)
    }

    return (
        <div className="flex p-64 " style={sectionStyle}>
            <div className="flex  w-full h-full bg-white/20 rounded-3xl overflow-hidden  ">
                <div className="flex flex-row gap-16 justify-start flex-wrap w-full h-auto p-20 overflow-y-auto items-start ">
                    {
                        listCalls.map(({ dtCall, endereco, name, obs, phone }, index) => (
                            <>
                                <div key={`${index}-${name}`} className="flex flex-col p-16 bg-white max-w-[565px] w-full rounded-2xl ">
                                    <div className="flex flex-row items-center">
                                        <h6 className="paragraph-20 font-semibold pr-8">
                                            Nome do Paciente:
                                        </h6>
                                        <p className="paragraph-20">{name}</p>
                                    </div>
                                    <div className="flex flex-row items-center">
                                        <h6 className="paragraph-20 font-semibold pr-8">
                                            Telefone:
                                        </h6>
                                        <p className="paragraph-20">{phone}</p>
                                    </div>
                                    <div className="flex flex-row items-center">
                                        <h6 className="paragraph-20 font-semibold pr-8">
                                            Endereço:
                                        </h6>
                                        <p className="paragraph-20">{endereco}</p>
                                    </div>
                                    <div className="flex flex-row items-center">
                                        <h6 className="paragraph-20 font-semibold pr-8">
                                            Data da consulta:
                                        </h6>
                                        <p className="paragraph-20">{dtCall}</p>
                                    </div>
                                    <div className="flex flex-row items-center">
                                        <h6 className="paragraph-20 font-semibold pr-8">
                                            Observação:
                                        </h6>
                                        <p className="paragraph-20">{obs}</p>
                                    </div>
                                    <div className="flex flex-row items-center">
                                        <h6 className="paragraph-20 font-semibold pr-8">
                                            Dentista responsável:
                                        </h6>
                                        <p className="paragraph-20">{user.name}</p>
                                    </div>
                                    <div className="flex flex-row-reverse gap-16">
                                        <button type="button" onClick={() => handleDeleteCall(index)} >
                                            Excluir
                                        </button>
                                        <a href={`/editCall/${index}`}>
                                            Editar
                                        </a>
                                    </div>
                                </div>
                            </>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}