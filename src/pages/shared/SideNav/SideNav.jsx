import React from 'react';
import { Link, NavLink } from 'react-router';
import { RxDashboard } from "react-icons/rx";
import { TbArrowBarToLeft } from 'react-icons/tb';
import logo from '../../../assets/logo-dark.png';
import logoIcon from '../../../assets/logoIcon.png';
import { BsBoxes, BsPlusSquare } from "react-icons/bs";
import { IoFastFoodOutline } from 'react-icons/io5';

const SideNav = ({ sideMenuOpen, setSideMenuOpen }) => {

    return (
        <div className='relative h-full'>
            <div className='px-6 py-6 duration-300'>
                {sideMenuOpen ? (
                    <Link to='/'>
                        <img src={logoIcon} alt="Logo" />
                    </Link>
                ) : (
                    <div className='duration-300'>
                        <Link to='/'>
                            <img src={logo} alt="Logo" />
                        </Link>
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
                    <li>
                        <NavLink to='/dashboard/add-food' className={`${sideMenuOpen && 'lg:justify-center'} flex items-center`}>
                            <div><BsPlusSquare className='text-[19px]' /></div>
                            <span className={`${sideMenuOpen && 'lg:hidden'} text-sm pl-2`}>Add Food</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/manage-my-foods' className={`${sideMenuOpen && 'lg:justify-center'} flex items-center`}>
                            <div><BsBoxes className='text-[19px]' /></div>
                            <span className={`${sideMenuOpen && 'lg:hidden'} text-sm pl-2`}>Manage My Foods</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/my-food-request' className={`${sideMenuOpen && 'lg:justify-center'} flex items-center`}>
                            <div><IoFastFoodOutline className='text-[19px]' /></div>
                            <span className={`${sideMenuOpen && 'lg:hidden'} text-sm pl-2`}>My Food Requests</span>
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