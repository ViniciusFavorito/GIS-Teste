import React, { createContext, useContext, useState } from 'react';
import { authService } from '../services/authServices';


interface IAuthContext {
  signed: boolean,
  login(email: string, password: string): void
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [signed, setSigned] = useState(false);
  const login = (email: string, password: string) => {
    const user = authService(email, password)
    if (user.email) {
      setSigned(true)
    } else {
      setSigned(false)
    }
  }

  return (
    <AuthContext.Provider value={{ signed, login }}>
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