import React from 'react';
import { TbArrowBarToLeft } from "react-icons/tb";

const DashboardTopNav = ({ sideMenuOpen, setSideMenuOpen }) => {
    return (
        <div className='bg-white py-4 px-4 lg:px-10'>
            <div className='flex items-center justify-between'>
                <div
                    onClick={() => setSideMenuOpen(!sideMenuOpen)}
                    className={`${sideMenuOpen ? 'rotate-180 text-theme-primary' : 'rotate-180 lg:rotate-0'} w-8 h-8 flex justify-center items-center text-[22px] hover:text-theme-primary cursor-pointer duration-200`}>
                    <TbArrowBarToLeft />
                </div>

                <div>
                    <div className='w-10 h-10 bg-gray-300 rounded-full'></div>
                </div>
            </div>
        </div>
    );
};

export default DashboardTopNav;