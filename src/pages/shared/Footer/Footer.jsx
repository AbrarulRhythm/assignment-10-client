import React from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { GrMapLocation } from 'react-icons/gr';
import { LuMailOpen } from 'react-icons/lu';
import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { HiOutlineChevronDoubleRight } from 'react-icons/hi';
import { Link } from 'react-router';
import logoWhite from '../../../assets/logo-white.png';

const Footer = () => {
    return (
        <footer className='bg-heading text-white'>
            <div className='container'>
                {/* First Footer */}
                <div className='pt-20'>
                    <div className='flex flex-wrap -mx-3'>
                        <div className='w-full px-3'>
                            <div className='border border-[#ffffff1a] rounded-md p-5 flex justify-center mb-8 lg:mb-11'>
                                <div className='flex flex-col lg:flex-row lg:items-center justify-between w-full max-w-[1200px]'>
                                    <div className='flex items-center gap-5'>
                                        <div className='w-[65px] h-[65px] rounded-sm bg-ps-primary text-white flex items-center justify-center text-2xl'>
                                            <FiPhoneCall />
                                        </div>
                                        <div>
                                            <h5 className='text-lg font-semibold'>Call us</h5>
                                            <p className='text-gray-400'>+1 123-456-0606</p>
                                        </div>
                                    </div>
                                    <div className='w-auto lg:w-px min-h-px lg:min-h-full my-5 lg:mx-5 bg-[#ffffff1a]'></div>
                                    <div className='flex items-center gap-5'>
                                        <div className='w-[65px] h-[65px] rounded-sm bg-ps-primary text-white flex items-center justify-center text-2xl'>
                                            <LuMailOpen />
                                        </div>
                                        <div>
                                            <h5 className='text-lg font-semibold'>Write to us</h5>
                                            <p className='text-gray-400'>info@plateshare.com</p>
                                        </div>
                                    </div>
                                    <div className='w-auto lg:w-px min-h-px lg:min-h-full my-5 lg:mx-5 bg-[#ffffff1a]'></div>
                                    <div className='flex items-center gap-5'>
                                        <div className='w-[65px] h-[65px] rounded-sm bg-ps-primary text-white flex items-center justify-center text-2xl'>
                                            <GrMapLocation />
                                        </div>
                                        <div>
                                            <h5 className='text-lg font-semibold'>Address</h5>
                                            <p className='text-gray-400'>24 King St, SC 29401 USA</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Second Footer */}
                <div className='seconed-footer pb-10 lg:pb-9'>
                    <div className='flex flex-wrap -mx-3'>
                        {/* Footer Logo / About */}
                        <div className='w-full lg:w-4/12 px-3'>
                            <div className='py-4 lg:py-11'>
                                <div className='mb-5'>
                                    <img src={logoWhite} alt='Footer Logo' />
                                </div>
                                <p>Sharing food, spreading love, and fighting hunger together with compassion.</p>
                                <ul className='mt-6 flex items-center gap-3'>
                                    <li>
                                        <a href="#" target='_blank' className='w-10 h-10 bg-ps-primary hover:bg-ps-primary/80 duration-300 flex items-center justify-center rounded-full'><FaFacebookF /></a>
                                    </li>
                                    <li>
                                        <a href="#" target='_blank' className='w-10 h-10 bg-ps-primary hover:bg-ps-primary/80 duration-300 flex items-center justify-center rounded-full'><FaXTwitter /></a>
                                    </li>
                                    <li>
                                        <a href="#" target='_blank' className='w-10 h-10 bg-ps-primary hover:bg-ps-primary/80 duration-300 flex items-center justify-center rounded-full'><FaInstagram /></a>
                                    </li>
                                    <li>
                                        <a href="#" target='_blank' className='w-10 h-10 bg-ps-primary hover:bg-ps-primary/80 duration-300 flex items-center justify-center rounded-full'><FaLinkedin /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className='w-full lg:w-2/12 px-3'>
                            <div className='py-4 lg:py-11 2xl:ml-5'>
                                <h3 className='text-xl font-semibold mb-3'>Quick Links</h3>
                                <ul>
                                    <li>
                                        <Link to='/' className='hover:text-ps-primary duration-300 inline-flex items-center gap-2 py-2'><HiOutlineChevronDoubleRight className='text-lg' /> Home</Link>
                                    </li>
                                    <li>
                                        <Link to='/' className='hover:text-ps-primary duration-300 inline-flex items-center gap-2 py-2'><HiOutlineChevronDoubleRight className='text-lg' /> About Us</Link>
                                    </li>
                                    <li>
                                        <Link to='/' className='hover:text-ps-primary duration-300 inline-flex items-center gap-2 py-2'><HiOutlineChevronDoubleRight className='text-lg' /> Donate Food</Link>
                                    </li>
                                    <li>
                                        <Link to='/' className='hover:text-ps-primary duration-300 inline-flex items-center gap-2 py-2'><HiOutlineChevronDoubleRight className='text-lg' /> Volunteer</Link>
                                    </li>
                                    <li>
                                        <Link to='/' className='hover:text-ps-primary duration-300 inline-flex items-center gap-2 py-2'><HiOutlineChevronDoubleRight className='text-lg' /> Featured Foods</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Company */}
                        <div className='w-full lg:w-2/12 px-3'>
                            <div className='py-4 lg:py-11 2xl:ml-5'>
                                <h3 className='text-xl font-semibold mb-3'>Company</h3>
                                <ul>
                                    <li>
                                        <Link to='/' className='hover:text-ps-primary duration-300 inline-flex items-center gap-2 py-2'><HiOutlineChevronDoubleRight className='text-lg' /> About Us</Link>
                                    </li>
                                    <li>
                                        <Link to='/' className='hover:text-ps-primary duration-300 inline-flex items-center gap-2 py-2'><HiOutlineChevronDoubleRight className='text-lg' /> Our Mission</Link>
                                    </li>
                                    <li>
                                        <Link to='/' className='hover:text-ps-primary duration-300 inline-flex items-center gap-2 py-2'><HiOutlineChevronDoubleRight className='text-lg' /> Meet the Team</Link>
                                    </li>
                                    <li>
                                        <Link to='/' className='hover:text-ps-primary duration-300 inline-flex items-center gap-2 py-2'><HiOutlineChevronDoubleRight className='text-lg' /> Careers</Link>
                                    </li>
                                    <li>
                                        <Link to='/' className='hover:text-ps-primary duration-300 inline-flex items-center gap-2 py-2'><HiOutlineChevronDoubleRight className='text-lg' /> Blog & News</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className='w-full lg:w-4/12 px-3'>
                            <div className='py-4 lg:py-11'>
                                <h3 className='text-xl font-semibold mb-3'>Subscribe</h3>
                                <p>Sign up for our monthly blogletter to stay informed about new apps and guids</p>
                                <div className='mt-6'>
                                    <form>
                                        <div className='relative'>
                                            <input type="email" name='email' className='w-full bg-white rounded-md text-body py-[22px] lg:py-6 px-6 focus:outline-0' placeholder='Email Address' required />
                                            <button className='button button-sm absolute top-[50%] -translate-y-[50%] right-2.5'>Send</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom / Copy Right Footer */}
            <div className='footer-bottom bg-[#172527] py-6'>
                <div className='container'>
                    <div className='flex flex-wrap -mx-3'>
                        <div className='w-full lg:w-6/12 px-3 mb-4 lg:mb-0'>
                            <ul className='footer-menu flex items-center gap-6 text-sm justify-center lg:justify-start'>
                                <li>
                                    <Link to='/'>Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link to='/'>Term & Condition</Link>
                                </li>
                                <li>
                                    <Link to='/'>FAQ</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='w-full lg:w-6/12 px-3'>
                            <p className='text-sm text-center lg:text-right'>Copyright &copy; 2025 <Link to='/' className='font-semibold text-gray-300 hover:text-ps-primary duration-300'>PlateShare</Link>. All rights reserveds</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;