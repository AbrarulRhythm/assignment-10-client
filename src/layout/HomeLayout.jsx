import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import { Outlet, useLocation } from 'react-router';
import Footer from '../components/Footer/Footer';
import LoadingPage from '../pages/LoadingPage/LoadingPage';

const HomeLayout = () => {
    const [loading, setloading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);
    const [scroll, setScroll] = useState(0);
    const location = useLocation();

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => setloading(false), 500);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        setloading(true);
        setFadeOut(false);
        const timer = setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => setloading(false), 500);
        }, 2000);

        return () => clearTimeout(timer);
    }, [location.pathname]);

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    });

    return (
        <>
            {
                loading ? (
                    <div className={`h-screen flex justify-center items-center ${fadeOut ? 'scale-150 duration-700 opacity-0 invisible' : ''}`}>
                        <LoadingPage></LoadingPage>
                    </div>
                ) : (
                    <>
                        <div className='main-wrapper'>
                            {/* Header */}
                            <header className={`${scroll ? 'border-b border-dark-04 shadow' : ''} fixed top-0 left-0 right-0 bg-white z-50`}>
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
                    </>
                )
            }
        </>
    );
};

export default HomeLayout;