import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    
    if(loading){
        return <div className="text-center p-3">
            <span className="loading loading-spinner text-error"></span>
        </div>
    }

    if(user){
        return children;
    }

    return <Navigate to="/signIn" state={{from: location}} replace></Navigate>
};

export default PrivateRoutes;