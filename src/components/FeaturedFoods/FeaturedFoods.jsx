import React, { use } from 'react';
import FoodCard from '../FoodCard/FoodCard';

const FeaturedFoods = ({ featuredFoodsPromise }) => {
    const featuredFoods = use(featuredFoodsPromise);

    return (
        <div className='flex flex-wrap -mx-3'>
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
        </div>
    );
};

export default FeaturedFoods;