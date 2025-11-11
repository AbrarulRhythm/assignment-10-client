import React from 'react';
import { Link, useLoaderData } from 'react-router';
import { FaArrowLeftLong } from 'react-icons/fa6';

// Image
import create_date from '../../assets/create_date.png';
import food_id from '../../assets/food_id.png';
import food_quantity from '../../assets/food_quantity_lg.png';
import location from '../../assets/location_lg.png';
import exp_date from '../../assets/exp_date_lg.png';

const FoodDetails = () => {
    const { _id, additionalNotes, foodStatus, donatorName, donatorImage, foodName, foodImage, foodQuantity, expireDate, created_at, pickupLocation, donatorNumber, donatorEmail } = useLoaderData();

    return (
        <section className='py-10 lg:py-20'>
            <title>{foodName}</title>

            <div className='container'>
                <div className='flex flex-wrap -mx-3 lg-mx-4'>
                    <div className='w-full lg:w-5/12 px-3 lg:px-4 mb-6'>
                        <div className='sticky top-8'>
                            <div className='mb-6'>
                                <img src={foodImage} className='w-full rounded-md' alt='Food Image' />
                            </div>
                            <div className='p-6 rounded-md bg-white border border-dark-04'>
                                <h4 className='mb-4 text-xl font-semibold text-heading'>Additional Notes</h4>
                                <p>{additionalNotes ? additionalNotes : 'Additional notes not Available '}</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full lg:w-7/12 px-3 lg:px-4'>
                        <Link to='/foods' className='text-base md:text-lg font-medium text-heading inline-flex items-center gap-2 hover:text-ps-primary duration-300 mb-4 md:mb-6'>
                            <FaArrowLeftLong /> Back to Foods
                        </Link>
                        <h1 className='text-2xl md:text-4xl text-heading font-bold mb-3 md:mb-4'>{foodName}</h1>
                        <p className='text-heading font-medium mb-6'>Food Status: <span className='text-green-500'>{foodStatus}</span></p>
                        <div className='p-6 rounded-md bg-white border border-dark-04 mb-6'>
                            <h4 className='mb-4 text-xl font-semibold text-heading'>Food Details</h4>
                            <ul className='space-y-[18px]'>
                                <li className='flex items-center gap-2.5'>
                                    <img src={food_id} className='w-5' alt='icons' />
                                    <div>
                                        <span className='font-medium'>Food Id:</span> {_id}
                                    </div>
                                </li>
                                <li className='flex items-center gap-2.5'>
                                    <img src={food_quantity} className='w-6' alt='icons' />
                                    <div>
                                        <span className='font-medium'>Food Quantity:</span> {foodQuantity}
                                    </div>
                                </li>
                                <li className='flex items-center gap-2.5'>
                                    <img src={location} className='w-6' alt='icons' />
                                    <div>
                                        <span className='font-medium'>Pickup Location:</span> {pickupLocation}
                                    </div>
                                </li>
                                <li className='flex items-center gap-2.5'>
                                    <img src={create_date} className='w-6' alt='icons' />
                                    <div>
                                        <span className='font-medium'>Create Date:</span> {created_at ? created_at[0] : 'data not found'}
                                    </div>
                                </li>
                                <li className='flex items-center gap-2.5'>
                                    <img src={exp_date} className='w-6' alt='icons' />
                                    <div>
                                        <span className='font-medium'>Expire Date:</span> {expireDate}
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className='p-6 rounded-md bg-white border border-dark-04 mb-6'>
                            <h4 className='mb-4 text-xl font-semibold text-heading'>Food Donator</h4>
                            <div className='flex flex-col md:flex-row items-start md:items-center gap-6'>
                                <div className='flex items-center gap-3 mr-0 md:mr-14'>
                                    <img src={donatorImage} className='w-14 h-14 rounded-full object-cover' alt="donatorImage" />
                                    <div>
                                        <h5 className='text-base font-semibold text-heading mb-0.5'>{donatorName}</h5>
                                        <span className='block text-sm'>{donatorNumber}</span>
                                    </div>
                                </div>
                                <div>
                                    <h5 className='text-base text-heading font-semibold mb-2'>Email</h5>
                                    <span>{donatorEmail}</span>
                                </div>
                            </div>
                        </div>
                        <button className='button w-full'>Request Food</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FoodDetails;