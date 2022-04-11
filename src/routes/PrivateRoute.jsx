import React from 'react'
import Cookies from 'js-cookie'
import { Navigate } from 'react-router-dom'

export const PrivateRoute = ({ children }) => {
  const tokenUser = Cookies.get('tokenUser')
  return (
    !!tokenUser
      ? children
      : <Navigate to='/login'></Navigate>
  )
}
