import React from 'react'
import Cookies from 'js-cookie'
import { Redirect } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const tokenUser = Cookies.get('tokenUser')
  return (
    !!tokenUser
      ? children
      : <Redirect
        to={{
          pathname: "/test-hotel-liis/login",
        }}
      ></Redirect>
  )
}
