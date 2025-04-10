import React, { useContext } from 'react'
import { Navigate } from 'react-router'

export default function ProtectedGuard({children}) {
  const accessToken = localStorage.getItem('accessToken')
    return (
    accessToken ? children : <Navigate to='users/login'/>
  )
}
