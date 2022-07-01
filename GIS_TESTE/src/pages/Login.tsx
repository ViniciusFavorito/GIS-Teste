
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/auth';
import logo from '/assets/background2.jpg'


export default function LoginPage() {

    const navegate = useNavigate();
    const { login } = useAuth();
    var sectionStyle = {
        width: "100%",
        height: "839px",
        backgroundImage: `url(${logo})`
    };

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            email: { value: string };
            password: { value: string };
        };
        const email = target.email.value;
        const password = target.password.value;
        await login(email, password);
        navegate("/dashboard")
    }

    return (
        <div className='' style={sectionStyle}>
            <form onSubmit={handleSubmit}>
                <div className="flex justify-center pt-10 " >
                    <div className="box-content  h-auto w-1/3 p-4 border-4 border-gray-500 mt-96  ">
                        <div className="mt-4 ">
                            <div>
                                <label className="block text-white" >E-mail</label>
                                <input type="text" name="email" placeholder="Ex: vfavorito7@gmail.com" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                            </div>
                            <div className="mt-4">
                                <label className="block text-white">Senha</label>
                                <input type="password" name="password" placeholder="*******" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                            </div>
                            <div className="flex items-baseline justify-between">
                                <button type="submit" className="px-6 py-2 mt-4 text-white bg-gray-700 rounded-lg hover:bg-gray-500">Entrar</button>
                                <a href="/create_account" className="text-sm text-white hover:underline">Criar Conta</a>
                            </div>
                        </div>
                    </div>
                </div >
            </form>
        </div>
    )
}
