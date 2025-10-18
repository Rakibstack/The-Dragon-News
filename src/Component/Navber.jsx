import React from 'react';
import { NavLink } from 'react-router';
import user from '../assets/user.png'

const Navber = () => {
    return (
        <div className='flex justify-between items-center my-8'>
            <div className=""></div>   
            <div className="Nav ml-35">
                <nav className='flex gap-5 text-accent'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/career'>Career</NavLink>
                </nav>
                </div>   
            <div className="user flex gap-3">
                <img src={user} alt="" />
                <button className='btn btn-primary px-8'>Login</button>
                </div>   
        </div>
    );
};

export default Navber;