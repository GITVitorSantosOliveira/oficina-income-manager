import React, {createContext, useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { api } from '../services/api';
import 'react-notifications/lib/notifications.css';
import { NotificationManager} from 'react-notifications';

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

        NotificationManager.success('Você foi logado com sucesso!',"",2000);


        setTimeout(()=>{
          navigate('/services')
        },3000)
      })
  
    } catch (error) {
      return NotificationManager.error('erro ao tentar logar!',"",2000);
    }
  }

  return(
    <AuthContext.Provider value={{authenticated,handleLogin}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;