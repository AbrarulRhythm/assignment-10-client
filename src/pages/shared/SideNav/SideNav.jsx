import React from 'react';
import { NavLink } from 'react-router';
import { RxDashboard } from "react-icons/rx";
import { TbArrowBarToLeft } from 'react-icons/tb';
import logo from '../../../assets/logo-dark.png';
import logoIcon from '../../../assets/logoIcon.png';

const SideNav = ({ sideMenuOpen, setSideMenuOpen }) => {

    return (
        <div className='relative h-full'>
            <div className='px-6 py-6 duration-300'>
                {sideMenuOpen ? (
                    <img src={logoIcon} alt="" />
                ) : (
                    <div className='duration-300'>
                        <img src={logo} alt="" />
                    </div>
                )}
            </div>

            <div className='px-6 side-nav overflow-hidden'>
                <ul>
                    <li>
                        <NavLink to='/dashboard/overview' className={`${sideMenuOpen && 'lg:justify-center'} flex items-center`}>
                            <div><RxDashboard className='text-[19px]' /></div>
                            <span className={`${sideMenuOpen && 'lg:hidden'} text-sm pl-2`}>Dashboard</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className='block lg:hidden absolute bottom-0 left-0 right-0 py-5 px-6'>
                <button onClick={() => setSideMenuOpen(!sideMenuOpen)} className='flex items-center space-x-2 text-sm cursor-pointer w-full'>
                    <TbArrowBarToLeft className='text-xl' /> <span>Collapsed View</span>
                </button>
            </div>
        </div>
    );
};

export default SideNav;