import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userimg from '../assets/user.png'
import { Authcontext } from '../Authprovider/Authprovider';

const Navber = () => {
    const {user,logoutuser} = use(Authcontext);

    const Handlelogout = () => {
        logoutuser();
    }
    return (
        <div className='sm:flex justify-between items-center my-8'>
            <div className=""></div>   
            <div className="Nav ml-35">
                <nav className='flex gap-5 text-accent'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/career'>Career</NavLink>
                </nav>
                </div>   
            <div className="user flex justify-center mt-3 gap-3">
                <img src={userimg} alt="" />
                {
                    user ? <Link onClick={Handlelogout} to='/auth/login' className='btn btn-primary px-8'>Log out</Link> : <Link to='/auth/login' className='btn btn-primary px-8'>Login</Link>
                }
                
                </div>   
        </div>
    );
};

export default Navber;