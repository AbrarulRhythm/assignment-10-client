import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { IoEyeOff } from 'react-icons/io5';
import { Link } from 'react-router';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [passwordError, setPasswordError] = useState('');

    return (
        <section className='py-12'>
            <div className='container'>
                <div className='flex flex-wrap -mx-3 justify-center'>
                    <div className='w-full md:w-9/12 lg:w-6/12 px-3'>
                        <div className='p-8 md:p-10 border border-dark-04 rounded-md'>
                            <div className='text-center mb-6'>
                                <h1 className='text-[34px] font-semibold text-heading mb-2'>Register Now!</h1>
                                <p>Already have an account? <Link to='/sign-in' className='text-ps-primary hover:underline'>Login Now</Link></p>
                            </div>
                            <form>
                                <div className='mb-4'>
                                    <label htmlFor="name" className='text-sm mb-2 inline-block'>Name</label>
                                    <input type="text" name='name' className='w-full px-6 py-3.5 border border-dark-04 rounded-md focus:outline-0 focus:border-ps-primary' placeholder='Oliver Noha' required />
                                </div>
                                <div className='mb-4'>
                                    <label htmlFor="email" className='text-sm mb-2 inline-block'>Eamil</label>
                                    <input type="eamil" name='email' className='w-full px-6 py-3.5 border border-dark-04 rounded-md focus:outline-0 focus:border-ps-primary' placeholder='olivernoha@gmail.com' required />
                                </div>
                                <div className='mb-4'>
                                    <label htmlFor="image" className='text-sm mb-2 inline-block'>Image-URL</label>
                                    <input type="text" name='image' className='w-full px-6 py-3.5 border border-dark-04 rounded-md focus:outline-0 focus:border-ps-primary' placeholder='https://your-image-url.com' required />
                                </div>
                                <div className='mb-4'>
                                    <label htmlFor="password" className='text-sm mb-2 inline-block'>Password</label>
                                    <div className='relative'>
                                        <input type={showPassword ? 'text' : 'password'} name='password' className={`${passwordError ? 'border-red-500 text-red-500 focus:border-red-500' : 'border-dark-04 focus:border-ps-primary text-body'} w-full px-6 py-3.5 border  rounded-md focus:outline-0`} placeholder='*************' required />
                                        <span onClick={() => setShowPassword(!showPassword)} className='absolute right-5 top-[50%] -translate-y-[50%] text-xl cursor-pointer text-dark-2 hover:text-dark-1 duration-150'>
                                            {showPassword ? <FaEye /> : <IoEyeOff />}
                                        </span>
                                    </div>
                                    <span className={`${passwordError ? 'block' : 'hidden'} text-[12px] mt-1 text-red-500`}>{passwordError}</span>
                                </div>
                                <div className='w-full'>
                                    <button className='w-full button mt-4 l-r-b'>Register</button>
                                </div>
                            </form>
                            <div className='my-6 overflow-hidden'>
                                <div className='relative font-medium text-center or-social'>OR</div>
                            </div>
                            {/* Google Sign In Button */}
                            <button className='font-semibold flex items-center justify-center w-full gap-2.5 border border-dark-04 hover:border-ps-primary duration-200 cursor-pointer rounded-sm py-3'>
                                <FcGoogle className='text-[26px]' /> Sign Up With Google
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;