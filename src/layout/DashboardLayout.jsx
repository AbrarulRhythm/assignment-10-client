import React, { useState } from 'react';
import DashboardTopNav from '../pages/shared/DashboardTopNav/DashboardTopNav';
import SideNav from '../pages/shared/SideNav/SideNav';
import { Outlet } from 'react-router';

const DashboardLayout = () => {
    const [sideMenuOpen, setSideMenuOpen] = useState(false);

    return (
        // Mian Wrapper
        <div className={`${sideMenuOpen ? 'lg:ml-[111px]' : 'lg:ml-[270px]'} duration-300 main-wrapper mt-[81px]`}>

            {/* Top Nav */}
            <nav className={`${sideMenuOpen ? 'lg:ml-[111px]' : 'lg:ml-[270px]'} duration-300 fixed top-0 bg-white left-0 right-0 z-50`}>
                <DashboardTopNav
                    sideMenuOpen={sideMenuOpen}
                    setSideMenuOpen={setSideMenuOpen}
                ></DashboardTopNav>
            </nav>
            {/* Top Nav End */}

            {/* Side Nav */}
            <nav className={`${sideMenuOpen ? 'left-0 shadow-2xl lg:shadow-none lg:w-[111px] w-[270px]' : '-left-[270px] w-[270px]'} duration-300 bg-white fixed top-0 lg:left-0 h-full overflow-hidden overflow-y-auto z-50`}>
                <SideNav
                    sideMenuOpen={sideMenuOpen}
                    setSideMenuOpen={setSideMenuOpen}
                ></SideNav>
            </nav>
            {/* Side Nav End */}

            {/* ==================== Msin Start ==================== */}
            <main className='py-4 pb-4 pl-4 pr-4 lg:pr-10'>
                <div className='bg-content-bg rounded-2xl p-6 md:p-8'>
                    <Outlet></Outlet>
                </div>
            </main>
            {/* ==================== Msin End ==================== */}

        </div>
        // Mian Wrapper End
    );
};

export default DashboardLayout;