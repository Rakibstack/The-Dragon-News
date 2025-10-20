import React from 'react';
import Navber from '../Component/Navber';
import { Outlet } from 'react-router';

const Authenticationlayout = () => {
    return (
        <div className='bg-base-200 min-h-screen'>
               <header className='w-11/12 mx-auto py-5'>
                <Navber></Navber>
               </header>
               <main >
                <Outlet></Outlet>
               </main>
        </div>
    );
};

export default Authenticationlayout;