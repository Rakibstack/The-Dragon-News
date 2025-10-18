import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex justify-center items-center flex-col py-6'>
             <img src={logo} alt="" />
             <p className='mt-3 mb-2 text-accent'>Journalism Without Fear or Favour</p> 
             <p>{format(new Date(), 'EEEE, MMMM d, YYY')}</p>
        </div>
    );
};

export default Header;