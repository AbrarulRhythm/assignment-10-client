import React, { useEffect, useState } from 'react';
import DashboardTitle from '../../../components/DashboardTitle/DashboardTitle';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import foodRequestIcon from '../../../assets/food-request-icon.png';
import FoodRequestTable from '../../../components/FoodRequestTable/FoodRequestTable';
import { Link } from 'react-router';

const MyFoodRequest = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [foodRequest, setFoodRequest] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axiosSecure.get(`/food-request?email=${user?.email}`)
            .then((data) => {
                setFoodRequest(data.data);
                setLoading(false);
            });
    });

    return (
        <div>
            <title>My Food Request</title>

            <DashboardTitle
                title='My Food Request'
            ></DashboardTitle>

            <div className='bg-transparent lg:bg-white lg:rounded-md lg:p-6'>
                <div className="overflow-x-auto">
                    <table className="table text-base">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>SL No</th>
                                <th>Foods</th>
                                <th>Donator</th>
                                <th>Why Need Food</th>
                                <th>Request Status</th>
                                <th className='text-end'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Loading row */}
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
                                foodRequest.length > 0 ? (
                                    foodRequest.map((food, index) => {
                                        return (
                                            <FoodRequestTable
                                                key={food._id}
                                                food={food}
                                                index={index}
                                                pageType="myRequests"
                                            ></FoodRequestTable>
                                        )
                                    })
                                ) : (
                                    <tr>
                                        <td colSpan='6' className='text-center'>
                                            <div className='py-6'>
                                                <img src={foodRequestIcon} className='mx-auto mb-4' alt='Food Icon' />
                                                <h6 className='text-base font-medium'>You have not requested any food yet.</h6>
                                                <Link to='/foods' className='button button-sm inline-block mt-5'>Browse Foods</Link>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyFoodRequest;