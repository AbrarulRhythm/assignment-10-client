import React from 'react';

// Image
// import heroBG from '../../assets/hero-bg-01.png';
import icon01 from '../../assets/icon01.png';
import { Link } from 'react-router';
import { FaPlay } from 'react-icons/fa';

const HeroSlider = () => {
    return (
        <section className='hero-section'>
            <div className='px-5 md:px-6 lg:px-8 2xl:px-10'>
                <div className='hero py-12 md:py-14 lg:py-[158px] rounded-2xl text-white'>
                    <div className='container'>
                        <div className='flex flex-wrap -mx-3'>
                            <div className='w-full lg:w-8/12 2xl:w-7/12 px-3'>
                                <div className='hero-contents p-4 md:p-6'>
                                    <div className='flex items-center gap-2.5 mb-3'>
                                        <img src={icon01} alt='Icon' />
                                        <h5 className='font-semibold'>Together Against Global Hunger</h5>
                                    </div>
                                    <h1 className='text-3xl md:text-4xl lg:text-6xl 2xl:text-[64px] leading-[1.4] font-bold mb-2'>Your Leftovers Can Make a Difference</h1>
                                    <p className='text-sm md:text-base'>Join our mission to ensure that no one sleeps hungry. Together, we can turn compassion into action and build a world where every plate is full of hope, love, and kindness.</p>
                                    <div className='flex items-center gap-3 md:gap-4 lg:gap-6 mt-6'>
                                        <Link to='/' className='button inline-block'>View All Foods</Link>
                                        <button className='w-12 lg:w-14 h-12 lg:h-14 text-base lg:text-lg bg-white rounded-full flex justify-center items-center cursor-pointer text-heading hover:bg-ps-primary hover:text-white duration-300'><FaPlay /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSlider;