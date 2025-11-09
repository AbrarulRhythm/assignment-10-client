import React from 'react';
import HeroSlider from '../../components/HeroSlider/HeroSlider';
import PrimaryCard from '../../components/PrimaryCard/PrimaryCard';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import FoodCard from '../../components/FoodCard/FoodCard';
import { Link } from 'react-router';
import CommunityImpact from '../../components/CommunityImpact/CommunityImpact';

const Home = () => {
    return (
        <>
            <HeroSlider></HeroSlider>
            <PrimaryCard></PrimaryCard>

            {/* Featured Foods */}
            <section className='py-14 lg:py-20 bg-card'>
                <div className='container'>
                    <SectionTitle
                        title='Featured'
                        strokeTitle='Foods'
                        subTitle='Tasty Contributions'
                        classes='text-center mb-10 lg:mb-12'
                    ></SectionTitle>

                    <div className='flex flex-wrap -mx-3'>
                        <FoodCard></FoodCard>
                        <FoodCard></FoodCard>
                        <FoodCard></FoodCard>
                    </div>
                    <div className='mt-6 text-center'>
                        <Link to='/' className='button'>Show All Foods</Link>
                    </div>
                </div>
            </section>

            {/* Community Impact */}
            <CommunityImpact></CommunityImpact>
        </>
    );
};

export default Home;