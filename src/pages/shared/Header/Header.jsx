import React, { useRef, useState } from 'react';
import { Link, NavLink } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import logoDark from '../../../assets/logo-dark.png';
import ProfileMenu from '../../../components/ProfileMenu/ProfileMenu';

const Header = () => {
    const { user } = useAuth();
    const [openMenu, setOpenMenu] = useState(false);
    const menuRef = useRef(null);
    const [openNavMenu, setOpenNavMenu] = useState(false);

    return (
        <div className='container'>
            <nav className='priamry-menu relative'>
                <div className='flex flex-wrap -mx-3 items-center justify-between'>
                    <div className='w-6/12 lg:w-3/12 px-3'>
                        {/* Header Logo */}
                        <Link to='/' title='PlateShare'>
                            <img src={logoDark} alt='Header Logo' />
                        </Link>
                        {/* Header Logo End */}
                    </div>

                    <div className='w-auto lg:w-6/12 px-3'>
                        <div className={`${openNavMenu ? 'block' : 'hidden lg:block'} header-nav absolute lg:static top-[99%] left-0 right-0 bg-white lg:bg-transparent p-4 lg:p-0 rounded-md border lg:border-0 border-dark-04`}>
                            <ul>
                                <li>
                                    <NavLink to='/'>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/foods'>Foods</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/about-us'>About Us</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/news'>News</NavLink>
                                </li>
                            </ul>
                            <div className='block lg:hidden'>
                                <Link to='/sign-in' className='button button-sm w-full text-center mt-2'>Sign In</Link>
                            </div>
                        </div>
                    </div>

                    <div className='w-auto lg:w-3/12 px-3'>
                        <div className='flex items-center justify-end'>
                            <button onClick={() => setOpenNavMenu(!openNavMenu)} className={`${openNavMenu ? 'active' : ''} block lg:hidden hamburger-menu p-3 me-0 z-3`}>
                                <span className="line line-1"></span>
                                <span className="line line-2"></span>
                                <span className="line line-3"></span>
                            </button>

                            {
                                user ? (
                                    <>
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
                                    </>
                                ) : (
                                    <div className='sign-in-button hidden lg:block'>
                                        <Link to='/sign-in' className='button button-sm'>Sign In</Link>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;