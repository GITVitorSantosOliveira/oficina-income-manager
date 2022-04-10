import React, {createContext, useContext, useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { api } from '../services/api';

const AuthContext = createContext();

export const AuthProvider=({children})=>{
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('oficina-income-manager')

    if(token){
      setAuthenticated(true);
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  }, [authenticated]);

 async function handleLogin(user,pass){
    try {
       await api.post('/login',{
        username:user,
        password:pass
      }).then((res)=>{
        if(res.status === 400 || res.data === undefined){return {message: 'Erro ao fazer login'}}
  
        localStorage.setItem('oficina-income-manager',res?.data.token)
        api.defaults.headers.common['Authorization'] = `Bearer ${res?.data.token}`;
        setAuthenticated(true);

        setTimeout(()=>{
          navigate('/services')
        },2000)
      })
  
    } catch (error) {
      return {message: error.message}
    }
  }

  return(
    <AuthContext.Provider value={{authenticated,handleLogin}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;