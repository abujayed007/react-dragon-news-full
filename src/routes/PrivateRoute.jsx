import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    console.log(location);

    if(loading){
        return <div className='flex justify-center items-center mt-48'>
            <span className="loading loading-infinity loading-lg mx-auto "></span>
        </div>
    }

    if(user){
        return children
    }
    return <Navigate state={location.pathname} to='/login'/>
};

export default PrivateRoute;