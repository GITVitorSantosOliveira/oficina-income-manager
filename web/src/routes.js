import React, { useContext } from 'react'
import { Routes, useNavigate } from 'react-router-dom';
import { BrowserRouter, Route} from 'react-router-dom';
import { AuthContext } from './Contexts/AuthContext';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage'
import ServicesPage from './pages/ServicesPage';

function Private({ isPrivate, children }) {
  const navigate = useNavigate()
  const {  authenticated } = useContext(AuthContext);

  if (isPrivate && !authenticated) {
    navigate('/login')
  }

  return children
}

const Routers=()=>{
  return(
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/register" element={<RegisterPage/>}/>
            <Route exact path="/login" element={<LoginPage/>}/>
            <Route exact isPrivate path="/services" element={
            <Private>
              <ServicesPage/>
            </Private>
            }/>
        </Routes>
    </BrowserRouter>
  )
}

export default Routers;