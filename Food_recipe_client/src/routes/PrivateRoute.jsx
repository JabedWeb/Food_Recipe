/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import { authContext } from '../providers/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
    const {user,loader}=useContext(authContext);
    const location =useLocation();
    console.log("location",location);
    console.log("user",user);
    if(loader){
        return <Spinner className='text-center' animation="border" variant="warning" />
    }
    console.log("location next",location);
    if(user){
        return children;
    }
    return <Navigate state={{from : location}} replace to="/login"></Navigate>
}

export default PrivateRoute