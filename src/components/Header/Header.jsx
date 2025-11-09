import React from 'react';
import { Link, NavLink } from 'react-router';

// Image
import logoDark from '../../assets/logo-dark.png';
import { FaBars } from 'react-icons/fa';

const Header = () => {
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
                                    <NavLink to='/z'>Available Foods</NavLink>
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
                            <Link to='/' className='button button-sm'>Sign In</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;