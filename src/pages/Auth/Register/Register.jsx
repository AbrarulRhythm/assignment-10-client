import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { IoEyeOff } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import { useForm } from "react-hook-form"
import { toast } from 'react-toastify';
import useAxios from '../../../hooks/useAxios';

const Register = () => {
    const { setUser, createUser, updateUserProfile, signInWithGoogle } = useAuth();
    const axiosInstance = useAxios();
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm();

    // Handle Create User
    const handleCreateUser = async (userData) => {
        createUser(userData.email, userData.password)
            .then((result) => {
                reset(); // reset form
                const user = result.user;

                // Update User
                updateUserProfile({ displayName: userData.name, photoURL: userData.image })
                    .then(() => {
                        setUser({ ...user, displayName: userData.name, photoURL: userData.image });

                        const newUser = {
                            name: userData.name,
                            email: user.email,
                            image: userData.image,
                            pass: btoa(userData.password)
                        }

                        // Create user in the database
                        axiosInstance.post('/users', newUser)
                            .then((data) => {
                                if (data.data.insertedId) {
                                    navigate('/');
                                    toast.success('Your account has been created successfully 🎉');
                                }
                            })
                    })
                    .catch((error) => {
                        toast.error(error.message);
                        setUser(user);
                    })
            })
            .catch((error) => {
                toast.error(error.message);
            })
    }

    // Handle Sign In with Google
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then((result) => {
                const user = result.user;
                const newUser = {
                    name: user.displayName,
                    email: user.email,
                    image: user.photoURL
                }

                // Create user in the database
                axiosInstance.post('/users', newUser)
                    .then((data) => {
                        if (data.data.insertedId) {
                            toast.success(`Welcome aboard, ${user.displayName}! 🎉 You've successfully signed up.`);
                            navigate('/');
                        }
                        else {
                            toast(data.data.message);
                            navigate('/');
                        }
                    })
            })
            .catch((error) => {
                toast.error(error.message);
            })
    }

    return (
        <section className='py-12 mt-[91px] lg:mt-[110px]'>
            <title>Sign up for PlateShare</title>

            <div className='container'>
                <div className='flex flex-wrap -mx-3 justify-center'>
                    <div className='w-full md:w-9/12 lg:w-6/12 px-3'>
                        <div className='p-8 md:p-10 border border-dark-04 rounded-md'>
                            <div className='text-center mb-6'>
                                <h1 className='text-[34px] font-semibold text-heading mb-2'>Register Now!</h1>
                                <p>Already have an account? <Link to='/sign-in' className='text-ps-primary hover:underline'>Login Now</Link></p>
                            </div>
                            <form onSubmit={handleSubmit(handleCreateUser)}>
                                {/* Name */}
                                <div className='mb-4'>
                                    <label htmlFor="name" className='text-sm mb-2 inline-block'>Name</label>
                                    <input type="text"
                                        {...register('name',
                                            {
                                                required: 'Name is required',
                                                minLength: { value: 3, message: 'Name must be at least 3 characters long.' },
                                                maxLength: { value: 30, message: 'Name cannot be longer than 30 characters.' }
                                            }
                                        )}
                                        className={`${errors.name ? 'border-red-500 focus:border-red-500 text-red-500' : 'border-dark-04 focus:border-ps-primary text-body'} w-full px-6 py-3.5 border  rounded-md focus:outline-0`} placeholder='Oliver Noha' />
                                    <span className={`${errors.name ? 'block mt-1' : 'hidden'} text-[14px] text-red-500`}>{errors.name && errors.name.message}</span>
                                </div>
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
                                {/* Image */}
                                <div className='mb-4'>
                                    <label htmlFor="image" className='text-sm mb-2 inline-block'>Image-URL</label>
                                    <input type="text" {...register('image', { required: 'Image is required' })} className={`${errors.image ? 'border-red-500 focus:border-red-500 text-red-500' : 'border-dark-04 focus:border-ps-primary text-body'} w-full px-6 py-3.5 border rounded-md focus:outline-0`} placeholder='https://your-image-url.com' />
                                    <span className={`${errors.image ? 'block mt-1' : 'hidden'} text-[14px] text-red-500`}>{errors.image && errors.image.message}</span>
                                </div>
                                {/* Password */}
                                <div className='mb-4'>
                                    <label htmlFor="password" className='text-sm mb-2 inline-block'>Password</label>
                                    <div className='relative'>
                                        <input type={showPassword ? 'text' : 'password'}
                                            {...register('password',
                                                {
                                                    required: 'Password is required',
                                                    validate: {
                                                        minLength: (value) =>
                                                            value.length >= 6 || "Must be at least 6 characters",
                                                        hasUppercase: (value) =>
                                                            /[A-Z]/.test(value) || "Must contain at least one uppercase letter",
                                                        hasLowercase: (value) =>
                                                            /[a-z]/.test(value) || "Must contain at least one lowercase letter",
                                                        hasSpecialChar: (value) =>
                                                            /[^A-Za-z0-9]/.test(value) || "Must contain at least one special character",
                                                    }
                                                })}
                                            className={`${errors.password ? 'border-red-500 text-red-500 focus:border-red-500' : 'border-dark-04 focus:border-ps-primary text-body'} w-full px-6 py-3.5 border  rounded-md focus:outline-0`} placeholder='*************' />
                                        <span onClick={() => setShowPassword(!showPassword)} className='absolute right-5 top-[50%] -translate-y-[50%] text-xl cursor-pointer text-dark-2 hover:text-dark-1 duration-150'>
                                            {showPassword ? <FaEye /> : <IoEyeOff />}
                                        </span>
                                    </div>
                                    <span className={`${errors.password ? 'block mt-1' : 'hidden'} text-[14px] text-red-500`}>{errors.password && errors.password.message}</span>
                                </div>
                                <div className='w-full'>
                                    <button className='w-full button mt-4 l-r-b' disabled={isSubmitting}>{isSubmitting ? <span className='loading loading-spinner loading-sm'></span> : 'Register'}</button>
                                </div>
                            </form>
                            <div className='my-6 overflow-hidden'>
                                <div className='relative font-medium text-center or-social'>OR</div>
                            </div>
                            {/* Google Sign In Button */}
                            <button onClick={handleGoogleSignIn} className='font-semibold flex items-center justify-center w-full gap-2.5 border border-dark-04 hover:border-ps-primary duration-200 cursor-pointer rounded-sm py-3'>
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