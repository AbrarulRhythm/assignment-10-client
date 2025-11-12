import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import quantity from '../../assets/FoodQuantity.png';
import Swal from 'sweetalert2';

const FoodRequestTable = ({ food, index, pageType }) => {
    const axiosSecure = useAxiosSecure();
    const [foodData, setFoodData] = useState([]);
    const [status, setStatus] = useState(food.status);

    useEffect(() => {
        axiosSecure.get(`/foods/${food.foodId}`)
            .then((data) => {
                setFoodData(data.data);
            })
    }, [axiosSecure, food.foodId]);

    // Handle Accept Request
    const handleAcceptRequest = (id, status) => {
        const foodRequestData = { status: status };
        const foodStatus = { foodStatus: 'Donated' };

        // Update Request Status
        axiosSecure.patch(`/food-request/${id}`, foodRequestData)
            .then((data) => {
                if (data.data.modifiedCount) {
                    // Update Food Status
                    axiosSecure.patch(`/food-status/${foodData._id}`, foodStatus)
                        .then((data) => {
                            if (data.data.modifiedCount) {
                                Swal.fire({
                                    position: "center",
                                    icon: "success",
                                    title: "Donated! 🎉",
                                    showConfirmButton: false,
                                    timer: 2000
                                })

                                setStatus('Accepted');
                            }
                        })
                }
            })
    }

    return (
        <tr key={food._id} >
            <td>{index + 1}</td>
            <td className='max-w-[300px]'>
                <div className='flex items-center gap-3'>
                    <img src={foodData.foodImage} className='rounded-sm w-[116px]' alt='Food Image' />
                    <div>
                        <h5 className='text-base font-medium text-heading mb-0.5'>{foodData.foodName}</h5>
                        <h6 className='text-[12px]'><span className='font-medium'>Create Date:</span> {foodData.created_at ? food.created_at[0] : 'data not found'}</h6>
                        <h6 className='text-[12px]'><span className='font-medium'>Expire Date:</span> {foodData.expireDate}</h6>
                    </div>
                </div>
            </td>
            <td>
                <div className='flex items-center gap-3'>
                    <img
                        src={
                            pageType === 'foodDetails'
                                ? food.requesterImage
                                : foodData.donatorImage
                        }
                        className='w-14 h-14 object-cover rounded-full' alt="Requester Image" />
                    <div>
                        <h5 className='text-heading font-semibold'>{pageType === 'foodDetails' ? food.requesterName : foodData.donatorName}</h5>
                        <span className='inline-block text-sm'>{pageType === 'foodDetails' ? food.contact : (foodData.donatorNumber ? foodData.donatorNumber : 'data not found')}</span>
                    </div>
                </div>
            </td>
            <td>
                <div className='flex items-center gap-2'>
                    <img src={quantity} className='w-6' alt='Quantity icon' /> <p><span>Quantity:</span> {foodData.foodQuantity}</p>
                </div>
            </td>
            <td>
                <span className={`${status === 'Accepted' ? 'bg-green-500 text-green-900' : 'bg-yellow-500 text-yellow-900'} text-[12px] font-medium px-3.5 py-1.5 rounded-full`}>{status}</span>
            </td>
            <td className='text-end'>
                <div className=' space-x-3'>
                    {
                        pageType === 'foodDetails' ? (
                            <>
                                <button onClick={() => handleAcceptRequest(food._id, 'Accepted')} className='text-sm text-green-500 border border-green-500 font-medium px-4 py-1 rounded-sm hover:bg-green-500 hover:text-white duration-300 cursor-pointer'>Accept </button>
                                <button className='text-sm text-red-500 border border-red-500 font-medium px-4 py-1 rounded-sm hover:bg-red-500 hover:text-white duration-300 cursor-pointer'>Reject</button>
                            </>
                        ) : (
                            <button className='text-sm text-red-500 border border-red-500 font-medium px-4 py-1 rounded-sm hover:bg-red-500 hover:text-white duration-300 cursor-pointer'>Delete</button>
                        )
                    }
                </div>
            </td>
        </tr>
    );
};

export default FoodRequestTable;