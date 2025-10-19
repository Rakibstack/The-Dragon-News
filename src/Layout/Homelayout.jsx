import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Component/Header';
import Latestnews from '../Component/Latestnews';
import Navber from '../Component/Navber';
import Leftaside from '../Homelayout/Leftaside';
import Rightaside from '../Homelayout/Rightaside';

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
            <main className='w-11/12 mx-auto my-12 md:grid gap-5 grid-cols-12'>
                <aside className='col-span-3 md:sticky top-0 h-fit'>
                    <Leftaside></Leftaside> 
                </aside>
                <section className="main col-span-6">
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <Rightaside></Rightaside>
                </aside>
                </main>
            
        </div>
    );
};

export default Homelayout;