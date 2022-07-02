import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/authService';
import { createBrowserHistory } from "history"
interface IAuthData {
  email: string,
  name: string
}

interface IAuthContext {
  user: IAuthData
  signed: boolean,
  login(email: string, password: string): void,
  logOut(): void
}


const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const history = createBrowserHistory();

  const [signed, setSigned] = useState(false);

  const [data, setData] = useState<IAuthData>(() => {
    const name =
      typeof Storage !== 'undefined' && localStorage.getItem('@gis:name')
    const email =
      typeof Storage !== 'undefined' && localStorage.getItem('@gis:email')


    return name && email ? { name, email } : ({} as IAuthData)
  })

  useEffect(() => {
    const email = typeof Storage !== 'undefined' && localStorage.getItem('@gis:email')
    const name = typeof Storage !== 'undefined' && localStorage.getItem('@gis:name')
    if (email) {
      setSigned(true)
      setData({ email, name: String(name) || "" })
    } else {
      if (history.location.pathname !== "/login" && history.location.pathname !== "/" && history.location.pathname !== "/create_account") {
        setSigned(false)
        navigate("/login")
      }
    }
  }, [])

  const login = async (email: string, password: string) => {
    const user = await authService(email, password)
    if (user.email) {
      setData({ name: user.name, email })
      setSigned(true)
      localStorage.setItem("@gis:email", email)
      localStorage.setItem("@gis:name", user.name)
      navigate("/dashboard")
    } else {
      setSigned(false)
      alert("Email ou Senha incorretos.")
    }
  }

  const logOut = () => {
    localStorage.removeItem('@gis:email')
    setSigned(false)
    navigate("/")
  }

  return (
    <AuthContext.Provider value={{ signed, login, logOut, user: data }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): IAuthContext => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
export { AuthProvider, useAuth };

