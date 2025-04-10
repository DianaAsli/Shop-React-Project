import React, { useContext } from 'react'
import { Navigate } from 'react-router';

export default function GuestGuard({ children }) {
   const accessToken = localStorage.getItem('accessToken');
    console.log('Guestgard', accessToken);
    
    return (
        !accessToken ? children : <Navigate to='/' />
    )
}
