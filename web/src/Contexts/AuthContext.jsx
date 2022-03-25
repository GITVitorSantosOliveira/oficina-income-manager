import React, {createContext} from 'react'
import useAuth from './Hooks/useAuth';

const AuthContext = createContext();



function AuthProvider({children}){
  const {authenticated,handleLogin} = useAuth();
  return(
    <AuthContext.Provider value={{authenticated, handleLogin}}>
      {children}
    </AuthContext.Provider>
  )
}

export {AuthContext,AuthProvider};