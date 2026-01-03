import React, { useRef, useState } from 'react';
import { TbArrowBarToLeft } from "react-icons/tb";
import useAuth from '../../../hooks/useAuth';
import ProfileMenu from '../../../components/ProfileMenu/ProfileMenu';

const DashboardTopNav = ({ sideMenuOpen, setSideMenuOpen }) => {
    const { user } = useAuth();
    const [openMenu, setOpenMenu] = useState(false);
    const menuRef = useRef(null);

    return (
        <div className='bg-white py-4 px-4 lg:px-10'>
            <div className='flex items-center justify-between'>
                <div
                    onClick={() => setSideMenuOpen(!sideMenuOpen)}
                    className={`${sideMenuOpen ? 'rotate-180 text-theme-primary' : 'rotate-180 lg:rotate-0'} w-8 h-8 flex justify-center items-center text-[22px] hover:text-theme-primary cursor-pointer duration-200`}>
                    <TbArrowBarToLeft />
                </div>

                <div ref={menuRef} className='relative'>
                    <div
                        onClick={(e) => {
                            e.stopPropagation();
                            setOpenMenu(!openMenu)
                        }}
                    >
                        <img src={`${user && user.photoURL}`} className='w-14 h-14 object-cover rounded-full cursor-pointer' alt='User Profile Image' />
                    </div>
                    <ProfileMenu
                        menuRef={menuRef}
                        openMenu={openMenu}
                        setOpenMenu={setOpenMenu}
                    ></ProfileMenu>
                </div>
            </div>
        </div>
    );
};

export default DashboardTopNav;