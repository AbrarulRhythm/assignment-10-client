import React, { useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateFood = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const food = useLoaderData();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm();

    useEffect(() => {
        if (user) {
            reset({
                donatorName: user?.displayName || '',
                donatorEmail: user?.email || '',
                donatorImage: user?.photoURL || '',

                // Food Info
                foodStatus: food.foodStatus,
                foodName: food.foodName,
                foodImage: food.foodImage,
                foodQuantity: food.foodQuantity,
                expireDate: food.expireDate,
                pickupLocation: food.pickupLocation,
                additionalNotes: food.additionalNotes,
                donatorNumber: food.donatorNumber
            })
        }
    }, [user, reset, food]);

    // Handle Add Food
    const handleAddFood = (foodData) => {
        axiosSecure.patch(`/foods/${food._id}`, foodData)
            .then((data) => {
                if (data.data.modifiedCount) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Food updated successfully!",
                        showConfirmButton: false,
                        timer: 2000
                    })
                }
            })
    }

    return (
        <section className='py-10 lg:py-20 mt-[91px] lg:mt-[110px]'>
            <title>Update Food - PlateShare</title>

            <div className='container'>
                <div className='flex flex-wrap -mx-3 justify-center'>
                    <div className='w-full md:w-11/12 lg:w-8/12 px-3'>
                        <div className='p-8 md:p-10 bg-white rounded-md border border-dark-04'>
                            <div className='text-center mb-6'>
                                <h1 className='text-[34px] font-semibold text-heading mb-2'>Update Food</h1>
                            </div>

                            <form onSubmit={handleSubmit(handleAddFood)}>
                                <div className='flex flex-wrap -mx-3'>
                                    {/* Food Name */}
                                    <div className='w-full md:w-6/12 px-3'>
                                        <div className='mb-4'>
                                            <label htmlFor="name" className='text-sm mb-2 inline-block'>Food Name</label>
                                            <input type="text"
                                                {...register('foodName',
                                                    {
                                                        required: 'Name is required',
                                                        minLength: { value: 3, message: 'Name must be at least 3 characters long.' },
                                                        maxLength: { value: 50, message: 'Name cannot be longer than 50 characters.' }
                                                    }
                                                )}
                                                className={`${errors.foodName ? 'border-red-500 focus:border-red-500 text-red-500' : 'border-dark-04 focus:border-ps-primary text-body'} w-full px-6 py-3.5 border  rounded-md focus:outline-0`} placeholder='Homemade Vegetable Soup' />
                                            <span className={`${errors.foodName ? 'block mt-1' : 'hidden'} text-[14px] text-red-500`}>{errors.foodName && errors.foodName.message}</span>
                                        </div>
                                    </div>
                                    {/* Food Image */}
                                    <div className='w-full md:w-6/12 px-3'>
                                        <div className='mb-4'>
                                            <label htmlFor="name" className='text-sm mb-2 inline-block'>Food Image</label>
                                            <input type="text"
                                                {...register('foodImage',
                                                    {
                                                        required: 'Food name is required'
                                                    }
                                                )}
                                                className={`${errors.foodImage ? 'border-red-500 focus:border-red-500 text-red-500' : 'border-dark-04 focus:border-ps-primary text-body'} w-full px-6 py-3.5 border  rounded-md focus:outline-0`} placeholder='https://your-image-url.com' />
                                            <span className={`${errors.foodImage ? 'block mt-1' : 'hidden'} text-[14px] text-red-500`}>{errors.foodImage && errors.foodImage.message}</span>
                                        </div>
                                    </div>
                                    {/* Food Quantity  */}
                                    <div className='w-full md:w-6/12 px-3'>
                                        <div className='mb-4'>
                                            <label htmlFor="name" className='text-sm mb-2 inline-block'>Food Quantity</label>
                                            <input type="number"
                                                {...register('foodQuantity',
                                                    {
                                                        required: 'Food food quantity is required'
                                                    }
                                                )}
                                                className={`${errors.foodQuantity ? 'border-red-500 focus:border-red-500 text-red-500' : 'border-dark-04 focus:border-ps-primary text-body'} w-full px-6 py-3.5 border  rounded-md focus:outline-0`} placeholder='Enter food quantity' />
                                            <span className={`${errors.foodQuantity ? 'block mt-1' : 'hidden'} text-[14px] text-red-500`}>{errors.foodQuantity && errors.foodQuantity.message}</span>
                                        </div>
                                    </div>
                                    {/* Expire Date  */}
                                    <div className='w-full md:w-6/12 px-3'>
                                        <div className='mb-4'>
                                            <label htmlFor="name" className='text-sm mb-2 inline-block'>Expire Date</label>
                                            <input type="date"
                                                {...register('expireDate',
                                                    {
                                                        required: 'Expire Date is required'
                                                    }
                                                )}
                                                className={`${errors.expireDate ? 'border-red-500 focus:border-red-500 text-red-500' : 'border-dark-04 focus:border-ps-primary text-body'} w-full px-6 py-3.5 border  rounded-md focus:outline-0`} placeholder='Enter food quantity' />
                                            <span className={`${errors.expireDate ? 'block mt-1' : 'hidden'} text-[14px] text-red-500`}>{errors.expireDate && errors.expireDate.message}</span>
                                        </div>
                                    </div>
                                    {/* Pickup Location  */}
                                    <div className='w-full md:w-12/12 px-3'>
                                        <div className='mb-4'>
                                            <label htmlFor="name" className='text-sm mb-2 inline-block'>Food Status</label>
                                            <select
                                                {...register('foodStatus',
                                                    {
                                                        required: 'Food Status is required'
                                                    }
                                                )}
                                                className={`${errors.foodStatus ? 'border-red-500 focus:border-red-500 text-red-500' : 'border-dark-04 focus:border-ps-primary text-body'} w-full px-6 py-3.5 border  rounded-md focus:outline-0 select`}>
                                                <option disabled={true}>Select Food Status</option>
                                                <option>Available</option>
                                                <option>Pending</option>
                                                <option>Donated</option>
                                            </select>
                                            <span className={`${errors.foodStatus ? 'block mt-1' : 'hidden'} text-[14px] text-red-500`}>{errors.foodStatus && errors.foodStatus.message}</span>
                                        </div>
                                    </div>
                                    {/* Pickup Location  */}
                                    <div className='w-full md:w-12/12 px-3'>
                                        <div className='mb-4'>
                                            <label htmlFor="name" className='text-sm mb-2 inline-block'>Pickup Location</label>
                                            <input type="text"
                                                {...register('pickupLocation',
                                                    {
                                                        required: 'Pickup Location is required'
                                                    }
                                                )}
                                                className={`${errors.pickupLocation ? 'border-red-500 focus:border-red-500 text-red-500' : 'border-dark-04 focus:border-ps-primary text-body'} w-full px-6 py-3.5 border  rounded-md focus:outline-0`} placeholder='123 Maple Street, Springfield, IL, 62701, USA' />
                                            <span className={`${errors.pickupLocation ? 'block mt-1' : 'hidden'} text-[14px] text-red-500`}>{errors.pickupLocation && errors.pickupLocation.message}</span>
                                        </div>
                                    </div>
                                    {/* Additional Notes  */}
                                    <div className='w-full md:w-12/12 px-3'>
                                        <div className='mb-4'>
                                            <label htmlFor="name" className='text-sm mb-2 inline-block'>Additional Notes (Optional)</label>
                                            <textarea {...register('additionalNotes')} cols="30" rows='4' className='w-full px-6 py-3.5 border  rounded-md focus:outline-0 border-dark-04 focus:border-ps-primary text-body' placeholder='Additional Notes'></textarea>
                                        </div>
                                    </div>
                                    <div className='w-full px-3'>
                                        <h5 className='text-sm relative font-semibold mb-4'>Donator's Information</h5>
                                    </div>
                                    {/* Donator Name */}
                                    <div className='w-full md:w-6/12 px-3'>
                                        <div className='mb-4'>
                                            <label htmlFor="name" className='text-sm mb-2 inline-block'>Donator's Name</label>
                                            <input type="text"
                                                {...register('donatorName',
                                                    {
                                                        required: "Donator's Name is required"
                                                    }
                                                )}
                                                className={`${errors.donatorName ? 'border-red-500 focus:border-red-500 text-red-500' : 'border-dark-04 focus:border-ps-primary text-body'} w-full px-6 py-3.5 border  rounded-md focus:outline-0`} placeholder='Oliver Noha' />
                                            <span className={`${errors.donatorName ? 'block mt-1' : 'hidden'} text-[14px] text-red-500`}>{errors.donatorName && errors.donatorName.message}</span>
                                        </div>
                                    </div>
                                    {/* Donator Email */}
                                    <div className='w-full md:w-6/12 px-3'>
                                        <div className='mb-4'>
                                            <label htmlFor="name" className='text-sm mb-2 inline-block'>Donator's Email</label>
                                            <input type="email"
                                                {...register('donatorEmail',
                                                    {
                                                        required: "Donator's Email is required",
                                                        pattern: {
                                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                            message: "Please enter a valid email address (must include @ and .com)",
                                                        }
                                                    }
                                                )}
                                                className={`${errors.donatorEmail ? 'border-red-500 focus:border-red-500 text-red-500' : 'border-dark-04 focus:border-ps-primary text-body'} w-full px-6 py-3.5 border  rounded-md focus:outline-0`} placeholder='olivernoha@gmail.com' />
                                            <span className={`${errors.donatorEmail ? 'block mt-1' : 'hidden'} text-[14px] text-red-500`}>{errors.donatorEmail && errors.donatorEmail.message}</span>
                                        </div>
                                    </div>
                                    {/* Donator Number  */}
                                    <div className='w-full md:w-12/12 px-3'>
                                        <div className='mb-4'>
                                            <label htmlFor="number" className='text-sm mb-2 inline-block'>Donator's Number (Optional)</label>
                                            <input type="number"
                                                {...register('donatorNumber')}
                                                className='w-full px-6 py-3.5 border  rounded-md focus:outline-0 border-dark-04 focus:border-ps-primary text-body' placeholder='(555) 987-1234' />
                                        </div>
                                    </div>
                                    {/* Donator Image */}
                                    <div className='w-full md:w-12/12 px-3'>
                                        <div className='mb-4'>
                                            <label htmlFor="name" className='text-sm mb-2 inline-block'>Donator's Image-URL</label>
                                            <input type="text"
                                                {...register('donatorImage',
                                                    {
                                                        required: "Donator's Image is required"
                                                    }
                                                )}
                                                className={`${errors.donatorImage ? 'border-red-500 focus:border-red-500 text-red-500' : 'border-dark-04 focus:border-ps-primary text-body'} w-full px-6 py-3.5 border  rounded-md focus:outline-0`} placeholder='Oliver Noha' />
                                            <span className={`${errors.donatorImage ? 'block mt-1' : 'hidden'} text-[14px] text-red-500`}>{errors.donatorImage && errors.donatorImage.message}</span>
                                        </div>
                                    </div>
                                    <div className='w-full px-3'>
                                        <button className='w-full button mt-4 l-r-b' disabled={isSubmitting}>{isSubmitting ? <span className='loading loading-spinner loading-sm'></span> : 'Update Food'}</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UpdateFood;