import React from 'react';
import { TbListDetails } from 'react-icons/tb';
import { Link } from 'react-router';

// Image
import FoodQuantity from '../../assets/FoodQuantity.png';
import PickupLocation from '../../assets/PickupLocation.png';
import ExpireDate from '../../assets/ExpireDate.png';

const FoodCard = () => {
    return (
        <div className='w-full md:w-6/12 lg:w-4/12 px-3 mb-6'>
            <div className='card-wrapper'>
                <div className='food-image'>
                    <img src="https://i.ibb.co.com/gLckKLtR/Rectangle-4.png" className='rounded-t-md w-full' alt='Food Card' />
                </div>
                <div className='p-6 border-t-0 border border-dark-04 bg-white rounded-b-md'>
                    <div className='flex justify-between items-center mb-6 gap-4'>
                        <h4 className='text-xl font-semibold text-heading'>Homemade Vegetable Soup</h4>
                        <span className='inline-block bg-green-400 text-green-700 rounded-4xl py-2 px-6 text-[12px] font-medium'>Available</span>
                    </div>
                    <ul className='text-sm space-y-3 mb-6'>
                        <li>
                            <div className='flex items-center gap-2.5'>
                                <img src={FoodQuantity} alt="FoodQuantity" />
                                <div>
                                    <strong className='font-medium'>Food Quantity: </strong> 09
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='flex items-center gap-2.5'>
                                <img src={PickupLocation} alt="FoodQuantity" />
                                <div>
                                    <strong className='font-medium'>Pickup Location: </strong> 123 Maple Street, Springfield, IL, 62701, USA
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='flex items-center gap-2.5'>
                                <img src={ExpireDate} alt="FoodQuantity" />
                                <div>
                                    <strong className='font-medium'>Expire Date: </strong> March 15, 2026
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className='flex items-center gap-3 mb-6'>
                        <img src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww&fm=jpg&q=60&w=3000" className='w-[46px] h-[46px] object-cover rounded-full' alt='Donator Image' />
                        <div>
                            <h5 className='font-medium text-heading mb-0.5'>Abrarul Rhythm</h5>
                            <span className='block text-[12px]'>(555) 123-4567</span>
                        </div>
                    </div>
                    <Link to='/' className='bg-card hover:bg-ps-primary hover:text-white duration-300 rounded-md px-4 py-3 text-ps-primary w-full flex items-center justify-center gap-1.5 font-medium'>
                        View Details <TbListDetails className='text-lg' />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;