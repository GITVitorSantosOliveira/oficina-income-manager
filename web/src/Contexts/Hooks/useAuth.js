import { useEffect, useState } from "react";
import { api } from "../../services/api";
import {Navigate, useNavigate} from 'react-router-dom'
import LoginPage from "../../pages/LoginPage";

export default function useAuth(){
  const [authenticated,setAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('oficina-income-manager')

    if(token){
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setAuthenticated(true);
    }

    return (<Navigate to='/login'/>)
  }, [])

  async function handleLogin(user,pass){
    try {
      const userData = await api.post('/login',{
        username:user,
        password:pass
      }).then((res)=>{
        if(res.status === 400 || res.data === undefined){return {message: 'Erro ao fazer login'}}
        localStorage.setItem('oficina-income-manager',res?.data.token)
        const token = localStorage.getItem('oficina-income-manager')
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        setAuthenticated(true)
      })

      return {userData}
    } catch (error) {
      return {message: error.message}
    }
  }
  

  return {authenticated,handleLogin}
}