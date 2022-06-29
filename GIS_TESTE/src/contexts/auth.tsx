import React, { createContext } from 'react';

const AuthContext = createContext({});

interface IAuthProvider{
    children: React.ReactNode
}

    export function AuthProvider({ children }:IAuthProvider){
        return (
          <AuthContext.Provider value={{ signed: true }}>
            {children}
          </AuthContext.Provider>
        );
    };


export default AuthContext;