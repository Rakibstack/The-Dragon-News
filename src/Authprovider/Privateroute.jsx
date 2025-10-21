import React, { use } from 'react';
import { Authcontext } from './Authprovider';
import { Navigate, useLocation } from 'react-router';
import Loader from '../Pages/Loader';

const Privateroute = ({children}) => {
     
    const {user,loader} = use(Authcontext);
    const location = useLocation();    

    if(loader){
        return <Loader></Loader>
    }

    if(user && user?.email){
        return children
    }

    return <Navigate state={location.pathname} to='/auth/login'></Navigate>
};

export default Privateroute;