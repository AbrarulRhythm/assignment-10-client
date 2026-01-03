import React from 'react';
import { TbListDetails } from 'react-icons/tb';
import { Link } from 'react-router';
import FoodQuantity from '../../../assets/FoodQuantity.png';
import PickupLocation from '../../../assets/PickupLocation.png';
import ExpireDate from '../../../assets/ExpireDate.png';
import { BiDonateBlood } from "react-icons/bi";

const FoodCard = ({ food, ...rest }) => {
    const { _id, foodStatus, donatorName, donatorImage, foodName, foodImage, foodQuantity, expireDate, pickupLocation, donatorNumber, aboutFood } = food;

    const aboutFoodSlice = aboutFood.split(' ').slice(0, 9).join(' ') + '...';

    return (
        // {...rest}
        <div className='w-full md:w-6/12 lg:w-3/12 px-2 mb-6'>
            <div className='card-wrapper bg-white border border-dark-04 h-full rounded-md group'>
                <div className='relative food-image rounded-t-md overflow-hidden'>
                    <img src={foodImage} className='rounded-t-md w-full group-hover:scale-110 duration-300 h-[200px] object-cover' alt='Food Image' />
                    <span className='absolute top-4 left-4 inline-block bg-green-500 text-white rounded-4xl py-1 px-3.5 text-[11px]'>{foodStatus}</span>
                </div>
                <div className='py-4 px-4'>
                    <h4 className='text-lg font-semibold text-heading mb-2'>{foodName}</h4>
                    <ul className='hidden text-sm space-y-3 mb-6'>
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
                    <p className='mb-4 text-sm'>{aboutFoodSlice}</p>
                    <div className='hidden items-center gap-3 mb-6'>
                        <img src={donatorImage} className='w-[46px] h-[46px] object-cover rounded-full' alt='Donator Image' />
                        <div>
                            <h5 className='font-medium text-heading mb-0.5'>{donatorName}</h5>
                            <span className='block text-[12px] font-medium'>{donatorNumber ? donatorNumber : 'not available'}</span>
                        </div>
                    </div>
                    <div className='space-y-2'>
                        <Link to={`/foods/${_id}`} className='text-sm bg-card hover:bg-ps-primary hover:text-white duration-300 rounded-md px-4 py-2.5 text-ps-primary w-full flex items-center justify-center gap-1.5 font-medium'>
                            <TbListDetails className='text-lg' /> View Details
                        </Link>
                        <Link to={`/foods/${_id}`} className='text-sm bg-transparent hover:bg-gray-100 duration-300 rounded-md px-4 py-2.5 text-gray-500 w-full flex items-center justify-center gap-1.5 font-medium'>
                            <BiDonateBlood className='text-lg' /> Add to Needs List
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;