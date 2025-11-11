import React, { use } from 'react';
import FoodCard from '../FoodCard/FoodCard';

const FeaturedFoods = ({ featuredFoodsPromise }) => {
    const featuredFoods = use(featuredFoodsPromise);

    return (
        <div className='flex flex-wrap -mx-3'>
            {
                featuredFoods.map(food => {
                    return (
                        <FoodCard
                            key={food._id}
                            food={food}
                        ></FoodCard>
                    )
                })
            }
        </div>
    );
};

export default FeaturedFoods;