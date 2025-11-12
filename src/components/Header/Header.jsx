import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { FaBars } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';
import { MdAdd } from 'react-icons/md';
import { BsBoxes } from 'react-icons/bs';
import { IoFastFoodOutline } from 'react-icons/io5';
import { PiSignOutBold } from 'react-icons/pi';

// Image
import logoDark from '../../assets/logo-dark.png';
import { toast } from 'react-toastify';

const Header = () => {
    const { user, signOutUser } = useAuth();
    const [openMenu, setOpenMenu] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpenMenu(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, []);

    // Handle Sign Out User
    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                toast.success('Successfully signed out! We hope to see you again soon.');
            })
            .catch((error) => {
                toast.error(error.message);
            })
    }

    return (
        <div className='container'>
            <nav className='priamry-menu py-2.5'>
                <div className='flex flex-wrap -mx-3 items-center'>
                    <div className='w-6/12 lg:w-3/12 px-3'>
                        {/* Header Logo */}
                        <Link to='/' title='PlateShare'>
                            <img src={logoDark} alt='Header Logo' />
                        </Link>
                        {/* Header Logo End */}
                    </div>

                    <div className='w-auto lg:w-6/12 px-3'>
                        {/* <button>
                            <FaBars />
                        </button> */}

                        <div className='header-nav'>
                            <ul>
                                <li>
                                    <NavLink to='/'>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/foods'>Available Foods</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/b'>About Us</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/c'>News</NavLink>
                                </li>
                            </ul>
                            {/* <Link to='/' className='button button-sm'>Sign In</Link> */}
                        </div>
                    </div>

                    <div className='w-auto lg:w-3/12 px-3'>
                        <div className='flex items-center justify-end'>
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
                                            <div className={`${openMenu ? 'opacity-100 visible' : 'opacity-0 invisible'} absolute right-0 top-[76px] w-[294px] h-auto text-sm before:content-[''] before:w-6 before:h-6  before:absolute before:-top-3 before:right-3.5 before:bg-white before:rotate-45 before:rounded-tl-sm before:border-t before:border-l before:border-dark-04 rounded-md bg-white border border-dark-04`}>
                                                <div className='pt-8 mb-6'>
                                                    <img src={`${user && user.photoURL}`} className='w-11 h-11 object-cover rounded-full mx-auto mb-2' alt='User Profile Pic' />
                                                    <h5 className='text-heading text-sm font-medium text-center'>{user && user.displayName}</h5>
                                                </div>
                                                <ul>
                                                    <li>
                                                        <Link to='/add-food' className='flex items-center px-4 py-2 gap-2 font-medium hover:bg-gray-100'>
                                                            <MdAdd className='text-lg' /> Add Food
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to='/manage-my-foods' className='flex items-center px-4 py-2 gap-2 hover:bg-gray-100'>
                                                            <BsBoxes className='text-lg' /> Manage My Foods
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to='/my-food-request' className='flex items-center px-4 py-2 gap-2 hover:bg-gray-100'>
                                                            <IoFastFoodOutline className='text-lg' /> My Food Requests
                                                        </Link>
                                                    </li>
                                                </ul>
                                                <div className='border-t-0 border border-dark-04 my-4'></div>
                                                <div className='px-4 pb-3'>
                                                    <button onClick={handleSignOut} className='w-full px-3 py-3 rounded-md border border-dark-04 bg-gray-100 hover:bg-gray-200 duration-300 cursor-pointer flex items-center justify-center gap-1 font-medium'><PiSignOutBold className='text-lg' /> Sing Out</button>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <div className='sign-in-button'>
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