import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/auth';
import { changePasswordService } from '../services/changePasswordService';
import logo from '/assets/background2.jpg'


export function ChangePassword() {


    var sectionStyle = {
        width: "100%",
        height: "839px",
        backgroundImage: `url(${logo})`
    };

    const { signed } = useAuth()
    const navegate = useNavigate();

    // useEffect(() => {
    //     if (!signed) {
    //         navegate("/login")
    //     }
    // }, [])

    const handleChangePassword = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            email: { value: string };
            lastPassword: { value: string };
            newPassword: { value: string };
        };
        const email = target.email.value;
        const lastPassword = target.lastPassword.value;
        const newPassword = target.newPassword.value;
        if (newPassword === lastPassword) {
            throw new Error('Nova senha nao pode ser igual a anteiror')
        }
        await changePasswordService(email, lastPassword, newPassword);
        navegate("/dashboard")
    }



    return (
        <div style={sectionStyle}>
            <form onSubmit={handleChangePassword}>
                <div className="flex justify-center pt-10 " >
                    <div className="bg-black/50 box-content p-16  h-auto w-1/3  border-4 border-gray-500 mt-96  ">
                        <div className=" flex flex-col gap-8 ">
                            <div>
                                <h6 className='heading-6 text-white '>
                                    Alterar Minha Senha
                                </h6>
                            </div>
                            <div>
                                <label className="block text-white">Confirme seu Email</label>
                                <input type="text" name="email" placeholder="vfavorito7@gmail.com" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                            </div>
                            <div>
                                <label className="block text-white">Senha Antiga</label>
                                <input type="password" name="lastPassword" placeholder="*******" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                            </div>
                            <div>
                                <label className="block text-white">Nova Senha</label>
                                <input type="password" name="newPassword" placeholder="*******" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                            </div>
                            <div className="flex items-baseline justify-between">
                                <a href="/login" className="px-6 py-2  text-white bg-gray-700 rounded-lg hover:bg-gray-500">Alterar senha</a>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}