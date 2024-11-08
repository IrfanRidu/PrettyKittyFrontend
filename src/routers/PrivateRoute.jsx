import React from 'react'
import { useAuth } from '../context/authContext'
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({children}) {

const {currentUser,loading}=useAuth();

if(loading){
    return <div>Loading....</div>
}

if(currentUser){
    return children
}

{
return <Navigate to="/login" replace />
}

 
}
