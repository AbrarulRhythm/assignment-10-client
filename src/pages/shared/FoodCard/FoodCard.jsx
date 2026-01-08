import React from 'react';
import { TbListDetails } from 'react-icons/tb';
import { Link } from 'react-router';
import { BiDonateBlood } from "react-icons/bi";

const FoodCard = ({ food, ...rest }) => {
    const { _id, foodStatus, foodName, foodImage, aboutFood } = food;

    const aboutFoodSlice = aboutFood.split(' ').slice(0, 9).join(' ') + '...';

    return (
        <div {...rest} className='w-full md:w-6/12 lg:w-3/12 px-2 mb-6'>
            <div className='card-wrapper bg-white border border-dark-04 h-full rounded-md group'>
                <div className='relative food-image rounded-t-md overflow-hidden'>
                    <img src={foodImage} className='rounded-t-md w-full group-hover:scale-110 duration-300 h-[200px] object-cover' alt='Food Image' />
                    <span className='absolute top-4 left-4 inline-block bg-green-500 text-white rounded-4xl py-1 px-3.5 text-[11px]'>{foodStatus}</span>
                </div>
                <div className=''>
                    <div className='py-4 px-4 flex flex-col justify-between h-full'>
                        <div>
                            <h4 className='text-lg font-semibold text-heading mb-2'>{foodName}</h4>
                            <p className='mb-4 text-sm'>{aboutFoodSlice}</p>
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
        </div>
    );
};

export default FoodCard;