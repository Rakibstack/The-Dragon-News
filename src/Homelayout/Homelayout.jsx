import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Component/Header';
import Latestnews from '../Component/Latestnews';
import Navber from '../Component/Navber';

const Homelayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                </header>
                <section className='w-11/12 mx-auto '>
                    <Latestnews></Latestnews>
                </section>
                <section className='w-11/12 mx-auto  '>
                <Navber></Navber></section>
            <main>
                <section className="Nav-left"></section>
                <section className="main">
                    <Outlet></Outlet>
                </section>
                <section className="Nav-right"></section>
            </main>
            
        </div>
    );
};

export default Homelayout;