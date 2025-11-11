import React, { useEffect, useState } from 'react';
import SectionBanner from '../../components/SectionBanner/SectionBanner';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { Link } from 'react-router';
import food from '../../assets/food.png';
import location from '../../assets/location_lg.png';
import quantity from '../../assets/FoodQuantity.png';

const ManageMyFoods = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        axiosSecure.get(`/my-foods?email=${user.email}`)
            .then((data) => {
                setFoods(data.data);
            })
    }, [user, axiosSecure])

    return (
        <>
            <title>Manage My Foods - PlateShare</title>

            <SectionBanner
                title='Manage My Foods'
                currentPage='Manage My Foods'
            ></SectionBanner>

            <section className='pt-14 pb-8 lg:pt-20 lg:pb-14'>
                <div className='container'>
                    <div className='flex flex-wrap -mx-3'>
                        <div className='w-full px-3'>
                            <div>
                                <div className="overflow-x-auto">
                                    <table className="table text-base">
                                        {/* head */}
                                        <thead>
                                            <tr>
                                                <th>SL No</th>
                                                <th>Foods</th>
                                                <th>Pickup Location</th>
                                                <th>Food Quantity</th>
                                                <th>Food Status</th>
                                                <th className='text-end'>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                foods ? (
                                                    foods.map((food, index) => {
                                                        return (
                                                            <tr key={food._id}>
                                                                <td>{index + 1}</td>
                                                                <td className='max-w-[300px]'>
                                                                    <div className='flex items-center gap-3'>
                                                                        <img src={food.foodImage} className='rounded-sm w-[116px]' alt='Food Image' />
                                                                        <div>
                                                                            <h5 className='text-base font-medium text-heading mb-0.5'>{food.foodName}</h5>
                                                                            <h6 className='text-[12px]'><span className='font-medium'>Create Date:</span> {food.created_at ? food.created_at[0] : 'data not found'}</h6>
                                                                            <h6 className='text-[12px]'><span className='font-medium'>Expire Date:</span> {food.expireDate}</h6>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className='max-w-[200px]'>
                                                                    <div className='flex items-center gap-2'>
                                                                        <img src={location} className='w-6' alt='Location icon' /> {food.pickupLocation}
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className='flex items-center gap-2'>
                                                                        <img src={quantity} className='w-6' alt='Quantity icon' /> <p><span>Quantity:</span> {food.foodQuantity}</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <span className={`${food.foodStatus === 'Available' ? 'bg-green-500 text-green-900' : 'bg-yellow-500 text-yellow-900'} text-[12px] font-medium px-3.5 py-1.5 rounded-full`}>{food.foodStatus}</span>
                                                                </td>
                                                                <td className='text-end'>
                                                                    <div className=' space-x-3'>
                                                                        <Link to={`/update-food/${food._id}`} className='text-sm text-yellow-500 border border-yellow-500 font-medium px-4 py-1 rounded-sm hover:bg-yellow-500 hover:text-white duration-300 cursor-pointer'>Update</Link>
                                                                        <button className='text-sm text-red-500 border border-red-500 font-medium px-4 py-1 rounded-sm hover:bg-red-500 hover:text-white duration-300 cursor-pointer'>Delete</button>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                ) : (
                                                    <tr>
                                                        <td colSpan='4' className='text-center'>
                                                            <div className='py-6'>
                                                                <img src={food} className='mx-auto mb-4' alt='Food Icon' />
                                                                <h6 className='text-base font-medium'>You have not added any food yet.</h6>
                                                                <Link to='/add-food' className='button button-sm inline-block mt-5'>Add your first food</Link>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ManageMyFoods;