import React from 'react';
import { Link } from 'react-router';

const SectionBanner = ({ title, currentPage }) => {
    return (
        <section className='bg-card py-14 md:py-20 lg:py-32 section-banner mt-[91px] lg:mt-[110px]'>
            <div className='container'>
                <div className='text-center'>
                    <h1 className='text-4xl md:text-5xl font-bold text-heading mb-4 md:mb-5'>{title}</h1>
                    <ul className='font-medium'>
                        <li>
                            <Link to='/' className='hover:text-ps-primary duration-200'>Home</Link>
                        </li>
                        <li className='text-ps-primary'>
                            {currentPage}
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default SectionBanner;