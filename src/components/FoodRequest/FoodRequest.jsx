import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import FoodRequestTable from '../FoodRequestTable/FoodRequestTable';
import useAuth from '../../hooks/useAuth';
import foodRequestIcon from '../../assets/food-request-icon.png';

const FoodRequest = ({ foodId }) => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [foodRequest, setFoodRequest] = useState([]);

    useEffect(() => {
        axiosSecure.get(`/food-request?id=${foodId}`)
            .then((data) => {
                setFoodRequest(data.data);
            })
    }, [axiosSecure, user, foodId]);

    return (
        <section className='pb-10 lg:pb-20'>
            <div className='container'>
                <h1 className='text-2xl md:text-3xl lg:text-4xl text-heading font-bold mb-10'>Request For This Food: <span className='text-ps-primary'>{foodRequest?.length ? foodRequest?.length < 10 ? `0${foodRequest.length}` : foodRequest.length : '00'} </span></h1>

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
                                            <th>Requester</th>
                                            <th>Why Need Food</th>
                                            <th>Request Status</th>
                                            <th className='text-end'>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            foodRequest.length > 0 ? (
                                                foodRequest.map((food, index) => {
                                                    return (
                                                        <FoodRequestTable
                                                            key={food._id}
                                                            food={food}
                                                            index={index}
                                                            pageType="foodDetails"
                                                        ></FoodRequestTable>
                                                    )
                                                })
                                            ) : (
                                                <tr>
                                                    <td colSpan='6' className='text-center'>
                                                        <div className='py-6'>
                                                            <img src={foodRequestIcon} className='mx-auto mb-4' alt='Food Icon' />
                                                            <h6 className='text-base font-medium'>You do not have any food request yet.</h6>
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
    );
};

export default FoodRequest;