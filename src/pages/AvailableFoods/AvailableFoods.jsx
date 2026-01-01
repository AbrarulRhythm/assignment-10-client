import React from 'react';
import SectionBanner from '../../components/SectionBanner/SectionBanner';
import { useLoaderData } from 'react-router';
import FoodCard from '../shared/FoodCard/FoodCard';

const AvailableFoods = () => {
    const foods = useLoaderData();

    return (
        <>
            <title>Available Foods - PlateShare</title>

            <SectionBanner
                title='Available Foods'
                currentPage='Available Foods'
            ></SectionBanner>

            <section className='pt-14 pb-8 lg:pt-20 lg:pb-14'>
                <div className='container'>
                    <div className='flex flex-wrap -mx-3'>
                        {
                            foods.map(food => {
                                return (
                                    <FoodCard
                                        key={food._id}
                                        food={food}
                                    ></FoodCard>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default AvailableFoods;