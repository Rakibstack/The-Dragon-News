import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Component/Header';

const Homelayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                </header>
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