import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { IoEyeOff } from 'react-icons/io5';
import { Link, useLocation, useNavigate } from 'react-router';
import useAuth from '../../hooks/useAuth';
import { toast } from 'react-toastify';

const SignIn = () => {
    const { singInUser } = useAuth();
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm();

    // Handle Sign In User
    const handleSignIn = (userData) => {
        singInUser(userData.email, userData.password)
            .then((result) => {
                reset(); // reset form
                const user = result.user;
                toast.success(`Sign In successful. Welcome back, ${user.displayName}!`);
                navigate(`${location.state ? location.state : '/'}`);
            })
            .catch((error) => {
                toast.error(error.message);
            })
    }

    return (
        <div>
            <section className='py-12'>
                <div className='container'>
                    <div className='flex flex-wrap -mx-3 justify-center'>
                        <div className='w-full md:w-9/12 lg:w-6/12 px-3'>
                            <div className='p-8 md:p-10 border border-dark-04 rounded-md'>
                                <div className='text-center mb-6'>
                                    <h1 className='text-[34px] font-semibold text-heading mb-2'>Sign In Now!</h1>
                                    <p>Don't have an account? <Link to='/register' className='text-ps-primary hover:underline'>Register Now</Link></p>
                                </div>
                                <form onSubmit={handleSubmit(handleSignIn)}>
                                    {/* Email */}
                                    <div className='mb-4'>
                                        <label htmlFor="email" className='text-sm mb-2 inline-block'>Eamil</label>
                                        <input type="eamil"
                                            {...register('email',
                                                {
                                                    required: 'Email is required',
                                                    pattern: {
                                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                        message: "Please enter a valid email address (must include @ and .com)",
                                                    }
                                                })}
                                            className={`${errors.email ? 'border-red-500 focus:border-red-500 text-red-500' : 'border-dark-04 focus:border-ps-primary text-body'} w-full px-6 py-3.5 border rounded-md focus:outline-0`} placeholder='olivernoha@gmail.com' />
                                        <span className={`${errors.email ? 'block mt-1' : 'hidden'} text-[14px] text-red-500`}>{errors.email && errors.email.message}</span>
                                    </div>
                                    {/* Password */}
                                    <div className='mb-4'>
                                        <label htmlFor="password" className='text-sm mb-2 inline-block'>Password</label>
                                        <div className='relative'>
                                            <input type={showPassword ? 'text' : 'password'}
                                                {...register('password',
                                                    {
                                                        required: 'Password is required'
                                                    })}
                                                className={`${errors.password ? 'border-red-500 text-red-500 focus:border-red-500' : 'border-dark-04 focus:border-ps-primary text-body'} w-full px-6 py-3.5 border  rounded-md focus:outline-0`} placeholder='*************' />
                                            <span onClick={() => setShowPassword(!showPassword)} className='absolute right-5 top-[50%] -translate-y-[50%] text-xl cursor-pointer text-dark-2 hover:text-dark-1 duration-150'>
                                                {showPassword ? <FaEye /> : <IoEyeOff />}
                                            </span>
                                        </div>
                                        <span className={`${errors.password ? 'block mt-1' : 'hidden'} text-[14px] text-red-500`}>{errors.password && errors.password.message}</span>
                                    </div>
                                    <div className='w-full'>
                                        <button className='w-full button mt-4 l-r-b' disabled={isSubmitting}>{isSubmitting ? <span className='loading loading-spinner loading-sm'></span> : 'Sign In'}</button>
                                    </div>
                                </form>
                                <div className='my-6 overflow-hidden'>
                                    <div className='relative font-medium text-center or-social'>OR</div>
                                </div>
                                {/* Google Sign In Button */}
                                <button className='font-semibold flex items-center justify-center w-full gap-2.5 border border-dark-04 hover:border-ps-primary duration-200 cursor-pointer rounded-sm py-3'>
                                    <FcGoogle className='text-[26px]' /> Sign In With Google
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SignIn;