import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router';
import image01 from '../../../assets/image01.png';

const CommunityImpact = () => {
    return (
        <section className='py-14 lg:py-20'>
            <div className='container'>
                <div className='flex flex-wrap -mx-3 lg:-mx-4 items-center overflow-hidden'>
                    <div data-aos="fade-right" data-aos-duration="1000" className='w-full lg:w-6/12 px-3 lg:px-4 mb-4'>
                        <h1 className='text-3xl md:text-4xl lg:text-[40px] leading-[1.4] font-semibold text-heading mb-4'>A Heartfelt Guide to Community Impact</h1>
                        <p>This shifts the focus to the positive effects and numbers that show the reach of the food donation efforts, while still maintaining the friendly, guiding tone.</p>
                        <Link to='/' className='mt-9 button'><div className='flex items-center gap-2'>Get started <FaChevronRight /></div></Link>
                        <div className='mt-12 flex flex-wrap -mx-3'>
                            <div className='count w-6/12 md:w-4/12 px-3 mb-6'>
                                <h1 className='text-[40px] font-semibold text-ps-primary'>500K+</h1>
                                <p className='text-lg font-medium'>Meals Donated</p>
                            </div>
                            <div className='count w-6/12 md:w-4/12 px-3 mb-6'>
                                <h1 className='text-[40px] font-semibold text-ps-primary'>200K+</h1>
                                <p className='text-lg font-medium'>People Fed</p>
                            </div>
                            <div className='count w-6/12 md:w-4/12 px-3 mb-6'>
                                <h1 className='text-[40px] font-semibold text-ps-primary'>100K+</h1>
                                <p className='text-lg font-medium'>Volunteers</p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="1500" className='w-full lg:w-6/12 px-3 lg:px-4'>
                        <img src={image01} className='w-full' alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CommunityImpact;