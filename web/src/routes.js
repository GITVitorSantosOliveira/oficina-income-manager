import React from 'react'
import { Routes } from 'react-router-dom';
import { BrowserRouter, Route} from 'react-router-dom';
import  { AuthProvider } from './Contexts/AuthContext';
import PrivateRoute from './Contexts/PrivateRoute';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage'
import ServicesPage from './pages/ServicesPage';

const Routers=()=>{
  return(
    <>
    <BrowserRouter>
        <AuthProvider>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/register" element={<RegisterPage/>}/>
            <Route exact path="/login" element={<LoginPage/>}/>
            <Route path='/services' element={
            <PrivateRoute>
              <ServicesPage/>
            </PrivateRoute>
            }/>
        </Routes>
        </AuthProvider>
    </BrowserRouter>
    </>
  )
}

export default Routers;