import React, { useRef } from 'react';
import { Link, useLoaderData } from 'react-router';
import { FaArrowLeftLong } from 'react-icons/fa6';

// Image
import create_date from '../../assets/create_date.png';
import food_id from '../../assets/food_id.png';
import food_quantity from '../../assets/food_quantity_lg.png';
import location from '../../assets/location_lg.png';
import exp_date from '../../assets/exp_date_lg.png';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import FoodRequest from '../../components/FoodRequest/FoodRequest';

const FoodDetails = () => {
    const { _id, additionalNotes, foodStatus, donatorName, donatorImage, foodName, foodImage, foodQuantity, expireDate, created_at, pickupLocation, donatorNumber, donatorEmail } = useLoaderData();
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const foodModalRef = useRef(null);

    const handleFoodRequestModalOpen = () => {
        foodModalRef.current.showModal();
    }

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm();

    // Hnadle Request Food
    const handleRequestFood = (requestData) => {
        const newRequestData = { ...requestData, requesterEmail: user?.email, requesterName: user?.displayName, requesterImage: user?.photoURL, donatorEmail: donatorEmail, donatorName: donatorName, donatorImage: donatorImage, foodId: _id, status: 'Pending' };

        axiosSecure.post('/food-request', newRequestData)
            .then((data) => {
                if (data.data.insertedId) {
                    reset(); // reset form
                    foodModalRef.current.close(); // Close Modal
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Food Request sent successfully!",
                        showConfirmButton: false,
                        timer: 2000
                    })
                }
            })
    }

    return (
        <>
            <section className='py-10 lg:py-20'>
                <title>{foodName}</title>

                <div className='container'>
                    <div className='flex flex-wrap -mx-3 lg-mx-4'>
                        <div className='w-full lg:w-5/12 px-3 lg:px-4 mb-6'>
                            <div className='sticky top-8'>
                                <div className='mb-6'>
                                    <img src={foodImage} className='w-full rounded-md' alt='Food Image' />
                                </div>
                                <div className='p-6 rounded-md bg-white border border-dark-04'>
                                    <h4 className='mb-4 text-xl font-semibold text-heading'>Additional Notes</h4>
                                    <p>{additionalNotes ? additionalNotes : 'Additional notes not Available '}</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-full lg:w-7/12 px-3 lg:px-4'>
                            <Link to='/foods' className='text-base md:text-lg font-medium text-heading inline-flex items-center gap-2 hover:text-ps-primary duration-300 mb-4 md:mb-6'>
                                <FaArrowLeftLong /> Back to Foods
                            </Link>
                            <h1 className='text-2xl md:text-4xl text-heading font-bold mb-3 md:mb-4'>{foodName}</h1>
                            <p className='text-heading font-medium mb-6'>Food Status: <span className='text-green-500'>{foodStatus}</span></p>
                            <div className='p-6 rounded-md bg-white border border-dark-04 mb-6'>
                                <h4 className='mb-4 text-xl font-semibold text-heading'>Food Details</h4>
                                <ul className='space-y-[18px]'>
                                    <li className='flex items-center gap-2.5'>
                                        <img src={food_id} className='w-5' alt='icons' />
                                        <div>
                                            <span className='font-medium'>Food Id:</span> {_id}
                                        </div>
                                    </li>
                                    <li className='flex items-center gap-2.5'>
                                        <img src={food_quantity} className='w-6' alt='icons' />
                                        <div>
                                            <span className='font-medium'>Food Quantity:</span> {foodQuantity}
                                        </div>
                                    </li>
                                    <li className='flex items-center gap-2.5'>
                                        <img src={location} className='w-6' alt='icons' />
                                        <div>
                                            <span className='font-medium'>Pickup Location:</span> {pickupLocation}
                                        </div>
                                    </li>
                                    <li className='flex items-center gap-2.5'>
                                        <img src={create_date} className='w-6' alt='icons' />
                                        <div>
                                            <span className='font-medium'>Create Date:</span> {created_at ? created_at[0] : 'data not found'}
                                        </div>
                                    </li>
                                    <li className='flex items-center gap-2.5'>
                                        <img src={exp_date} className='w-6' alt='icons' />
                                        <div>
                                            <span className='font-medium'>Expire Date:</span> {expireDate}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className='p-6 rounded-md bg-white border border-dark-04 mb-6'>
                                <h4 className='mb-4 text-xl font-semibold text-heading'>Food Donator</h4>
                                <div className='flex flex-col md:flex-row items-start md:items-center gap-6'>
                                    <div className='flex items-center gap-3 mr-0 md:mr-14'>
                                        <img src={donatorImage} className='w-14 h-14 rounded-full object-cover' alt="donatorImage" />
                                        <div>
                                            <h5 className='text-base font-semibold text-heading mb-0.5'>{donatorName}</h5>
                                            <span className='block text-sm'>{donatorNumber}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <h5 className='text-base text-heading font-semibold mb-2'>Email</h5>
                                        <span>{donatorEmail}</span>
                                    </div>
                                </div>
                            </div>
                            {donatorEmail !== user?.email && (
                                <button onClick={handleFoodRequestModalOpen} className='button w-full'>Request Food</button>
                            )}
                        </div>
                    </div>
                </div>

                {/* Request Food Modal */}
                <dialog ref={foodModalRef} id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-semibold text-heading text-xl mb-4">Request Food</h3>
                        <div>
                            <form onSubmit={handleSubmit(handleRequestFood)}>
                                {/* Location */}
                                <div className='mb-4'>
                                    <label htmlFor="location" className='text-sm mb-2 inline-block'>Location</label>
                                    <input type="text"
                                        {...register('location',
                                            {
                                                required: 'Location is required',
                                            }
                                        )}
                                        className={`${errors.location ? 'border-red-500 focus:border-red-500 text-red-500' : 'border-dark-04 focus:border-ps-primary text-body'} w-full px-6 py-3.5 border  rounded-md focus:outline-0`} placeholder='123 Maple Street, Springfield, IL, 62701, USA' />
                                    <span className={`${errors.location ? 'block mt-1' : 'hidden'} text-[14px] text-red-500`}>{errors.location && errors.location.message}</span>
                                </div>
                                {/* Why Need Food  */}
                                <div className='mb-2'>
                                    <label htmlFor="whyNeedFood" className='text-sm mb-2 inline-block'>Why Need Food</label>
                                    <textarea
                                        {...register('whyNeedFood',
                                            {
                                                required: 'This field is required',
                                            }
                                        )}
                                        cols="30" rows='4' className={`${errors.whyNeedFood ? 'border-red-500 focus:border-red-500 text-red-500' : 'border-dark-04 focus:border-ps-primary text-body'} w-full px-6 py-3.5 border  rounded-md focus:outline-0`} placeholder='Why Need Food'></textarea>
                                    <span className={`${errors.whyNeedFood ? 'block mt-1' : 'hidden'} text-[14px] text-red-500`}>{errors.whyNeedFood && errors.whyNeedFood.message}</span>
                                </div>
                                {/* Contact No */}
                                <div className='mb-4'>
                                    <label htmlFor="location" className='text-sm mb-2 inline-block'>Contact No.</label>
                                    <input type="number"
                                        {...register('contact',
                                            {
                                                required: 'Contact is required',
                                            }
                                        )}
                                        className={`${errors.contact ? 'border-red-500 focus:border-red-500 text-red-500' : 'border-dark-04 focus:border-ps-primary text-body'} w-full px-6 py-3.5 border  rounded-md focus:outline-0`} placeholder='(555) 987-1234' />
                                    <span className={`${errors.contact ? 'block mt-1' : 'hidden'} text-[14px] text-red-500`}>{errors.contact && errors.contact.message}</span>
                                </div>
                                <button className='button mt-1' disabled={isSubmitting}>{isSubmitting ? <span className='loading loading-spinner loading-sm'></span> : 'Submit Request'}</button>
                            </form>
                        </div>
                        <div className="modal-action">
                            <form method="dialog">
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </section>

            {donatorEmail === user?.email && (
                <FoodRequest></FoodRequest>
            )}
        </>
    );
};

export default FoodDetails;