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

    const navigate = useNavigate();
    const { user } = useAuth()
    console.log({ user })
    const handleChangePassword = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            lastPassword: { value: string };
            newPassword: { value: string };
        };
        const lastPassword = target.lastPassword.value;
        const newPassword = target.newPassword.value;
        if (newPassword === lastPassword) {
            return alert('Nova senha nao pode ser igual a anteiror')
        }
        await changePasswordService(user.email, lastPassword, newPassword);
        navigate("/dashboard")
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
                                <label className="block text-white">Senha Antiga</label>
                                <input type="password" name="lastPassword" placeholder="*******" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                            </div>
                            <div>
                                <label className="block text-white">Nova Senha</label>
                                <input type="password" name="newPassword" placeholder="*******" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                            </div>
                            <div className="flex items-baseline justify-between">
                                <button type="submit" className="px-6 py-2  text-white bg-gray-700 rounded-lg hover:bg-gray-500">Alterar senha</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}