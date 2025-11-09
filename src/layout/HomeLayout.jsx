import React from 'react';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';

const HomeLayout = () => {
    return (
        <div className='main-wrapper'>
            {/* Header */}
            <header>
                <Header></Header>
            </header>
            {/* Header End */}

            {/* ========== Main Start ====== */}
            <main className='site-main'>
                <Outlet></Outlet>
            </main>
            {/* ========== Main End ====== */}

            {/* Footer */}
            <Footer></Footer>
            {/* Footer End */}
        </div>
    );
};

export default HomeLayout;