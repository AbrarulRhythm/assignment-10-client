import React, { useEffect, useState } from 'react';
import DashboardTitle from '../../../components/DashboardTitle/DashboardTitle';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import foodIcon from '../../../assets/food.png';
import location from '../../../assets/location_lg.png';
import quantity from '../../../assets/FoodQuantity.png';
import { Link } from 'react-router';
import moment from 'moment';

const ManageMyFoods = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [foods, setFoods] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axiosSecure.get(`/my-foods?email=${user.email}`)
            .then((data) => {
                setFoods(data.data);
                setLoading(false);
            })
    }, [user, axiosSecure])

    const handleDeleteFood = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/foods/${_id}`)
                    .then((data) => {
                        if (data.data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your food has been deleted.",
                                icon: "success"
                            });

                            const remaningFoods = foods.filter(food => food._id !== _id);
                            setFoods(remaningFoods);
                        }
                    })
            }
        });
    }

    return (
        <>
            <title>Manage My Foods</title>

            <DashboardTitle
                title='Manage My Foods'
            ></DashboardTitle>

            <div className='bg-transparent lg:bg-white lg:rounded-md lg:p-6'>
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
                            {/* Loading Row */}
                            {loading && (
                                <tr>
                                    <td colSpan='6' className='text-center'>
                                        <div className='py-10'>
                                            <span className="loading loading-bars loading-xl"></span>
                                        </div>
                                    </td>
                                </tr>
                            )}

                            {/* Data Row */}
                            {!loading && (
                                foods.length > 0 ? (
                                    foods.map((food, index) => {
                                        return (
                                            <tr key={food._id}>
                                                <td>{index + 1}</td>
                                                <td className='max-w-[300px]'>
                                                    <div className='flex flex-col lg:flex-row items-start lg:items-center gap-3'>
                                                        <img src={food.foodImage} className='rounded-sm max-h-[95px] object-cover w-[116px]' alt='Food Image' />
                                                        <div className='w-[400px]'>
                                                            <h5 className='text-base font-medium text-heading mb-0.5'>{food.foodName}</h5>
                                                            <h6 className='text-[12px]'><span className='font-medium'>Created At:</span> {moment(food.created_at).format('ll')}</h6>
                                                            <h6 className='text-[12px]'><span className='font-medium'>Expire Date:</span> {moment(food.expireDate).format('ll')}</h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className='max-w-[200px]'>
                                                    <div className='flex flex-col lg:flex-row items-start lg:items-center gap-2 w-[200px]'>
                                                        <img src={location} className='w-6' alt='Location icon' /> {food.pickupLocation}
                                                    </div>
                                                </td>
                                                <td className='whitespace-nowrap lg:whitespace-normal'>
                                                    <div className='flex flex-col lg:flex-row items-start lg:items-center gap-2 w-[180px]'>
                                                        <img src={quantity} className='w-6' alt='Quantity icon' /> <p><span>Quantity:</span> {food.foodQuantity}</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className={`
                                                                        ${food.foodStatus === 'Available'
                                                            ? 'bg-green-500 text-green-900'
                                                            : food.foodStatus === 'Donated'
                                                                ? 'bg-gray-300 text-gray-800'
                                                                : 'bg-yellow-500 text-yellow-900'
                                                        } text-[12px] font-medium px-3.5 py-1.5 rounded-full
                                                                        `}>
                                                        {food.foodStatus}
                                                    </span>
                                                </td>
                                                <td className='text-end whitespace-nowrap'>
                                                    <div className=' space-x-3'>
                                                        <Link to={`/update-food/${food._id}`} className='text-sm text-yellow-500 border border-yellow-500 font-medium px-4 py-1 rounded-sm hover:bg-yellow-500 hover:text-white duration-300 cursor-pointer'>Update</Link>
                                                        <button
                                                            onClick={() => handleDeleteFood(food._id)}
                                                            className='text-sm text-red-500 border border-red-500 font-medium px-4 py-1 rounded-sm hover:bg-red-500 hover:text-white duration-300 cursor-pointer'>Delete</button>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })
                                ) : (
                                    <tr>
                                        <td colSpan='6' className='text-center'>
                                            <div className='py-6'>
                                                <img src={foodIcon} className='mx-auto mb-4' alt='Food Icon' />
                                                <h6 className='text-base font-medium'>You have not added any food yet.</h6>
                                                <Link to='/add-food' className='button button-sm inline-block mt-5'>Add your first food</Link>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default ManageMyFoods;