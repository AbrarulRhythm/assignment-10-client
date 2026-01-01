import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router';
import LoadingPage from '../pages/LoadingPage/LoadingPage';
import Header from '../pages/shared/Header/Header';
import Footer from '../pages/shared/Footer/Footer';

const HomeLayout = () => {
    const [loading, setloading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);
    const location = useLocation();
    const [navStickyMovedUp, setNavStickyMovedUp] = useState(false);
    const [stickyNavTransition, setStickyNavTransition] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    // Preloader
    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => setloading(false), 500);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const startLoading = () => {
            setloading(true);
            setFadeOut(false);
        };

        startLoading();

        const handleLoad = () => {
            setFadeOut(true);
            setTimeout(() => setloading(false), 500);
        };


        if (document.readyState === 'complete') {
            const timer = setTimeout(handleLoad, 1000);
            return () => clearTimeout(timer);
        } else {
            window.addEventListener('load', handleLoad);
            return () => window.removeEventListener('load', handleLoad);
        }
    }, [location.pathname]);

    // Sticky Navbar
    useEffect(() => {
        const handleScroll = () => {
            const scroll = window.scrollY;

            if (scroll >= 153) {
                setNavStickyMovedUp(true);
            }
            else {
                setNavStickyMovedUp(false);
            }

            // Apply Transition
            if (scroll >= 250) {
                setStickyNavTransition(true)
            }
            else {
                setStickyNavTransition(false);
            }

            // Sticky On
            if (scroll >= 500) {
                setIsSticky(true);
            }
            else {
                setIsSticky(false);
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
                            <header className={`
                                ${navStickyMovedUp ? 'fixed top-0 lg:top-0 -mt-[110px]' : 'absolute'}
                                ${stickyNavTransition ? 'duration-500' : ''}
                                ${isSticky ? 'mt-0 duration-500 shadow-md bg-white py-0' : 'py-2.5'}
                                -top-[91px] lg:-top-[110px] left-0 right-0 bg-white z-50`}>
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