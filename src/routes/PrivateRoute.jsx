import React from 'react'
import Cookies from 'js-cookie'
import { Navigate } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const tokenUser = Cookies.get('tokenUser')
  return (
    !!tokenUser
      ? children
      : <Redirect
        to={{
          pathname: "/login",
        }}
      ></Redirect>
  )
}
