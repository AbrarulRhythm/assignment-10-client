import React, { useEffect, useState } from 'react';
import DashboardTitle from '../../../components/DashboardTitle/DashboardTitle';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useLoaderData } from 'react-router';
import { Controller, useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from 'react-toastify';
import axios from 'axios';

const UpdateFood = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const food = useLoaderData();
    const [startDate, setStartDate] = useState(new Date());
    const [previewImage, setPreviewImage] = useState("");

    const {
        register,
        handleSubmit,
        reset,
        control,
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
                foodQuantity: food.foodQuantity,
                expireDate: food.expireDate,
                pickupLocation: food.pickupLocation,
                aboutFood: food.aboutFood,
                additionalNotes: food.additionalNotes,
                donatorNumber: food.donatorNumber
            });
            setPreviewImage(food.foodImage);
        }
    }, [user, reset, food]);

    // Handle Add Food
    const handleAddFood = async (foodData) => {
        try {
            // Store the image and get the photo url
            let photoURL = food.foodImage;

            if (foodData.foodImage && foodData.foodImage.length > 0 && typeof foodData.foodImage !== 'string') {
                const image = foodData.foodImage[0];
                const formData = new FormData();
                formData.append('image', image);

                const imageAPI_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`;

                const imageRes = await axios.post(imageAPI_URL, formData);

                if (imageRes.data.success) {
                    photoURL = imageRes.data.data.url;
                }
            }

            const convertedFoodQuantity = parseInt(foodData.foodQuantity);
            const updateNewFoodData = { ...foodData, foodQuantity: convertedFoodQuantity, foodImage: photoURL };

            const res = await axiosSecure.patch(`/foods/${food._id}`, updateNewFoodData);

            if (res.data.modifiedCount) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Food updated successfully!",
                    showConfirmButton: false,
                    timer: 2000
                });
            }
        }
        catch (error) {
            toast.error(error.message);
        }
    }

    return (
        <>
            <title>Update Foods</title>

            <DashboardTitle
                title='Update Foods'
            ></DashboardTitle>


            <div className='bg-transparent lg:bg-white lg:px-20 lg:py-14 rounded-md'>
                <form onSubmit={handleSubmit(handleAddFood)}>
                    <div className='flex flex-wrap -mx-3'>
                        {/* Food Name */}
                        <div className='w-full md:w-12/12 px-3'>
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
                        <div className='w-full md:w-12/12 px-3'>
                            <div className='mb-4 flex gap-4'>
                                <div>
                                    {previewImage && (
                                        <img src={previewImage} alt="Preview" style={{ width: '100px' }} />
                                    )}
                                </div>
                                <div className='w-full'>
                                    <label className='text-sm mb-2 inline-block'>Food Image</label>
                                    <input type="file"
                                        {...register('foodImage',
                                            {
                                                required: previewImage ? false : 'Food name is required',
                                                onChange: (e) => {
                                                    const file = e.target.files[0];
                                                    if (file) {
                                                        setPreviewImage(URL.createObjectURL(file));
                                                    }
                                                }
                                            }
                                        )}
                                        className={`${errors.foodImage ? 'border-red-500 focus:border-red-500 text-red-500' : 'border-dark-04 focus:border-ps-primary text-body'} w-full px-6 py-3.5 border  rounded-md focus:outline-0`} />
                                    <span className={`${errors.foodImage ? 'block mt-1' : 'hidden'} text-[14px] text-red-500`}>{errors.foodImage && errors.foodImage.message}</span>
                                </div>
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
                                <Controller
                                    name='expireDate'
                                    control={control}
                                    defaultValue={startDate}
                                    rules={{
                                        required: 'Expire Date is required',
                                    }}
                                    render={({ field }) => (
                                        <DatePicker
                                            {...field}
                                            className={`${errors.expireDate ? 'border-red-500 focus:border-red-500 text-red-500' : 'border-dark-04 focus:border-ps-primary text-body'} w-full px-6 py-3.5 border  rounded-md focus:outline-0`}
                                            selected={field.value} onChange={(date) => {
                                                setStartDate(date);
                                                field.onChange(date)
                                            }} />
                                    )}
                                />
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
                        {/* About Food  */}
                        <div className='w-full md:w-12/12 px-3'>
                            <div className='mb-4'>
                                <label htmlFor="name" className='text-sm mb-2 inline-block'>About Food</label>
                                <textarea {...register('aboutFood', {
                                    required: 'Food About is required'
                                })} cols="30" rows='4' className={`${errors.aboutFood ? 'border-red-500 focus:border-red-500 text-red-500' : 'border-dark-04 focus:border-ps-primary text-body'} w-full px-6 py-3.5 border  rounded-md focus:outline-0`} placeholder='About Food'></textarea>
                                <span className={`${errors.aboutFood ? 'block mt-1' : 'hidden'} text-[14px] text-red-500`}>{errors.aboutFood && errors.aboutFood.message}</span>
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
                        <div className='w-full md:w-auto px-3'>
                            <button className='button mt-4 l-r-b' disabled={isSubmitting}>{isSubmitting ? <div className='flex items-center justify-center gap-2'><span className='loading loading-spinner loading-sm'></span> Update Food</div> : 'Update Food'}</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default UpdateFood;