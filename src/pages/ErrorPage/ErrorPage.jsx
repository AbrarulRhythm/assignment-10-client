import React from 'react';
import pageNotFount from '../../assets/404.png';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <section className='py-20 h-screen flex items-center justify-center'>
            <div className='container'>
                <div className='flex flex-wrap -mx-3 items-center justify-center'>
                    <div className='w-full  lg:w-8/12 px-3'>
                        <div>
                            <img src={[pageNotFount]} className='w-full md:w-[80%] mx-auto' alt="404 image" />
                            <h1 className='text-heading text-3xl md:text-5xl font-bold text-center mb-3 md:mb-5'>Oops, page not found!</h1>
                            <p className='text-base md:text-lg text-center'>The page you are looking for is not available.</p>
                            <div className='text-center mt-4 md:mt-5'>
                                <Link to='/' className='button'>Go To Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;