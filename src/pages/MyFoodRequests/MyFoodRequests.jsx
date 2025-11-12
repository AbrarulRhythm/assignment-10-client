import React, { useEffect, useState } from 'react';
import SectionBanner from '../../components/SectionBanner/SectionBanner';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import FoodRequestTable from '../../components/FoodRequestTable/FoodRequestTable';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router';
import foodRequestIcon from '../../assets/food-request-icon.png';

const MyFoodRequests = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [foodRequest, setFoodRequest] = useState([]);

    useEffect(() => {
        axiosSecure.get(`/food-request?email=${user?.email}`)
            .then((data) => {
                setFoodRequest(data.data)
            })
    })

    return (
        <>
            <title>My Food Request - PlateShare</title>

            <SectionBanner
                title='My Food Request'
                currentPage='My Food Request'
            ></SectionBanner>

            <section className='py-14 lg:py-20'>

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
                                                <th>Donator</th>
                                                <th>Food Quantity</th>
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
                                                                table='myRequest'
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

export default MyFoodRequests;