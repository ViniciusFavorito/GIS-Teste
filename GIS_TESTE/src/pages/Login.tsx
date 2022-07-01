
export default function Login() {

    return (
        <div className="flex justify-center pt-10 bg-[url('{'/assets/background.png'}')]" >
            <div className="box-content  h-auto w-1/3 p-4 border-4 border-gray-500  ">
                <div className="mt-4">
                    <div>
                        <label className="block" >E-mail</label>
                        <input type="text" placeholder="Ex: vfavorito7@gmail.com" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                    </div>
                    <div className="mt-4">
                        <label className="block">Senha</label>
                        <input type="password" placeholder="*******" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                    </div>
                    <div className="flex items-baseline justify-between">
                        <a href="/dashboard" className="px-6 py-2 mt-4 text-white bg-gray-700 rounded-lg hover:bg-gray-900">Entrar</a>
                        <a href="/create_account" className="text-sm text-gray-700 hover:underline">Criar Conta</a>
                    </div>
                </div>
            </div>
        </div >
    )
}
