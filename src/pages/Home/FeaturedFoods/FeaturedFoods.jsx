import React, { use } from 'react';
import FoodCard from '../../shared/FoodCard/FoodCard';
import EmptyState from '../../../components/EmptyState/EmptyState';
import noFood from '../../../assets/no-food.png';

const FeaturedFoods = ({ featuredFoodsPromise }) => {
    const featuredFoods = use(featuredFoodsPromise);

    return (
        <div className='flex flex-wrap -mx-2'>
            {!featuredFoods || featuredFoods.length === 0 ? (
                <div className='w-full px-2'>
                    <EmptyState
                        icon={noFood}
                        message='Oops! We couldn’t locate that food item.'
                    ></EmptyState>
                </div>
            ) : (
                <>
                    {
                        featuredFoods.map((food, index) => {
                            const duration = 400 + index * 100;
                            return (
                                <FoodCard
                                    data-aos="fade-up"
                                    data-aos-duration={duration}
                                    key={food._id}
                                    food={food}
                                ></FoodCard>
                            )
                        })
                    }
                </>
            )}
        </div>
    );
};

export default FeaturedFoods;