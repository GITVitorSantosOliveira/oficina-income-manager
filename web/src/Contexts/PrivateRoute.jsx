import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import AuthContext from './AuthContext'

 function PrivateRoute({children,...props}) {
  const {authenticated} = useContext(AuthContext)

  setTimeout(() => {
    if(!authenticated || authenticated === false){
      return <Navigate to='/login' state={props.location} />
    }
  }, 2000);


  return (
    <>
    {children}
    </>
  )
}

export default PrivateRoute