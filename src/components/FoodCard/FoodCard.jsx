import React from 'react';
import { TbListDetails } from 'react-icons/tb';
import { Link } from 'react-router';

// Image
import FoodQuantity from '../../assets/FoodQuantity.png';
import PickupLocation from '../../assets/PickupLocation.png';
import ExpireDate from '../../assets/ExpireDate.png';

const FoodCard = ({ food, ...rest }) => {
    const { _id, foodStatus, donatorName, donatorImage, foodName, foodImage, foodQuantity, expireDate, pickupLocation, donatorNumber } = food;

    return (
        <div {...rest} className='w-full md:w-6/12 lg:w-4/12 px-3 mb-6'>
            <div className='card-wrapper bg-white border border-dark-04 h-full rounded-md group'>
                <div className='food-image rounded-t-md overflow-hidden'>
                    <img src={foodImage} className='rounded-t-md w-full group-hover:scale-110 duration-300 max-h-[300px] object-cover' alt='Food Card' />
                </div>
                <div className='p-6'>
                    <div className='flex justify-between items-center mb-6 gap-4'>
                        <h4 className='text-xl font-semibold text-heading'>{foodName}</h4>
                        <span className='inline-block bg-green-400 text-green-700 rounded-4xl py-2 px-6 text-[12px] font-medium'>{foodStatus}</span>
                    </div>
                    <ul className='text-sm space-y-3 mb-6'>
                        <li>
                            <div className='flex items-center gap-2.5'>
                                <img src={FoodQuantity} alt="FoodQuantity" />
                                <div>
                                    <strong className='font-medium'>Food Quantity: </strong> {foodQuantity}
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='flex items-center gap-2.5'>
                                <img src={PickupLocation} alt="FoodQuantity" />
                                <div>
                                    <strong className='font-medium'>Pickup Location: </strong> {pickupLocation}
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='flex items-center gap-2.5'>
                                <img src={ExpireDate} alt="FoodQuantity" />
                                <div>
                                    <strong className='font-medium'>Expire Date: </strong> {expireDate}
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className='flex items-center gap-3 mb-6'>
                        <img src={donatorImage} className='w-[46px] h-[46px] object-cover rounded-full' alt='Donator Image' />
                        <div>
                            <h5 className='font-medium text-heading mb-0.5'>{donatorName}</h5>
                            <span className='block text-[12px] font-medium'>{donatorNumber ? donatorNumber : 'not available'}</span>
                        </div>
                    </div>
                    <Link to={`/foods/${_id}`} className='bg-card hover:bg-ps-primary hover:text-white duration-300 rounded-md px-4 py-3 text-ps-primary w-full flex items-center justify-center gap-1.5 font-medium'>
                        View Details <TbListDetails className='text-lg' />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;