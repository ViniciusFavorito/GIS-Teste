import { useNavigate } from 'react-router-dom';
import { createAccountService } from '../services/createAccountService';
import logo from '/assets/background2.jpg'


export function CreateAccount() {


    var sectionStyle = {
        width: "100%",
        height: "calc(100vh - 88px)",
        backgroundImage: `url(${logo})`,
        backgroundPosition: "center"
    };

    const navegate = useNavigate();

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            email: { value: string };
            password: { value: string };
            name: { value: string };
            confirmPassword: { value: string };
        };
        const email = target.email.value;
        const password = target.password.value;
        const name = target.name.value;
        const confirmPassword = target.confirmPassword.value;
        if (email === "") {
            alert("O campo E-mail n�o pode ficar vazio.")
        } else if (name === "") {
            alert("O campo Nome n�o pode ficar vazio.")
        } else if (password === "") {
            alert("O campo Password n�o pode ficar vazio.")
        } else if (confirmPassword !== password) {
            alert('As senhas digitadas n�o s�o iguais.')
        } else {
            await createAccountService(name, email, password);
            navegate("/login")
        }
    }


    return (
        <div style={sectionStyle}>
            <form onSubmit={handleSubmit}>
                <div className="flex justify-center pt-10 " >
                    <div className="bg-black/50 box-content p-16  h-auto w-1/3  border-4 border-gray-500 mt-96  ">
                        <div className=" flex flex-col gap-8 ">
                            <div>
                                <h6 className='heading-6 text-white '>
                                    Criar Conta
                                </h6>
                            </div>
                            <div>
                                <label className="block text-white" >Nome Completo</label>
                                <input type="text" name="name" placeholder="Ex: Vinicius Favorito Rodrigues" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                            </div>
                            <div>
                                <label className="block text-white" >E-mail</label>
                                <input type="email" name="email" placeholder="Ex: vfavorito7@gmail.com" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                            </div>
                            <div>
                                <label className="block text-white">Senha</label>
                                <input type="password" name="password" placeholder="*******" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                            </div>
                            <div>
                                <label className="block text-white">Confirme sua senha</label>
                                <input type="password" name="confirmPassword" placeholder="*******" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                            </div>
                            <div className="flex items-baseline justify-between">
                                <button type="submit" className="px-6 py-2  text-white bg-gray-700 rounded-lg hover:bg-gray-500">Criar Conta</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}