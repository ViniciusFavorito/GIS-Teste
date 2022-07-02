
import { useNavigate } from 'react-router-dom';
import logo from '/assets/background2.jpg'
import { createBrowserHistory } from "history"
import { useEffect, useState } from 'react';
import { getCall } from '../services/getCallService';
import { editCallService } from '../services/editCallService';


export interface ICall {
    id: number,
    name: string,
    phone: string,
    endereco: string,
    dtCall: string,
    obs: string
}


export default function EditCall() {

    const navegate = useNavigate();
    const history = createBrowserHistory();
    const [call, setCall] = useState<ICall>({} as ICall);

    useEffect(() => {
        const id: number = Number(history.location.pathname.split("/")[2])
        setCall({ ...getCall(id), id })
    }, [])

    var sectionStyle = {
        width: "100%",
        height: "839px",
        backgroundImage: `url(${logo})`
    };

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            name: { value: string };
            dtCall: { value: string };
            endereco: { value: string };
            obs: { value: string };
            phone: { value: string };
        };
        const name = target.name.value;
        const dtCall = target.dtCall.value;
        const endereco = target.endereco.value;
        const obs = target.obs.value;
        const phone = target.phone.value;

        await editCallService({ id: call.id, name, dtCall, endereco, obs, phone });
        navegate("/dashboard")
    }

    return (
        <div style={sectionStyle}>
            <form onSubmit={handleSubmit}>
                <div className="flex justify-center pt-10 " >
                    <div className="bg-black/50 box-content p-16  h-auto w-1/3  border-4 border-gray-500 mt-96  ">
                        <div className=" flex flex-col gap-8 ">
                            <div>
                                <h6 className='heading-6 text-white '>
                                    Editar Atendimento
                                </h6>
                            </div>
                            <div>
                                <label className="block text-white" >Nome do Paciente</label>
                                <input type="text" name="name" placeholder="Ex: Vinicius Favorito" defaultValue={call.name} className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                            </div>
                            <div>
                                <label className="block text-white">Telefone</label>
                                <input type="text" name="phone" placeholder="994729104" defaultValue={call.phone} className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                            </div>
                            <div>
                                <label className="block text-white">Endereço</label>
                                <input type="text" name="endereco" placeholder="Rua PB 7" defaultValue={call.endereco} className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                            </div>
                            <div>
                                <label className="block text-white">Data da consulta</label>
                                <input type="date" name="dtCall" placeholder="01/07/22" defaultValue={call.dtCall} className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                            </div>
                            <div>
                                <label className="block text-white">Observações</label>
                                <textarea name="obs" placeholder="Não pode tomar dipirona." defaultValue={call.obs} className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                            </div>
                            <div className="flex items-baseline justify-between">
                                <button type="submit" className="px-6 py-2  text-white bg-gray-700 rounded-lg hover:bg-gray-500">Salvar Atendimento</button>
                            </div>
                        </div>
                    </div>
                </div >
            </form>
        </div>
    )
}

// : Nome<br />
//         //     : Telefone<br />
//         //     : Endereço<br />
//         //     : Data da consulta<br />
//         //     : OBS DO PACIENTE