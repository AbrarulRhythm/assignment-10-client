import React from 'react';
import HeroSlider from '../../components/HeroSlider/HeroSlider';
import PrimaryCard from '../../components/PrimaryCard/PrimaryCard';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const Home = () => {
    return (
        <>
            <HeroSlider></HeroSlider>
            <PrimaryCard></PrimaryCard>
            <section className='py-14 lg:py-20 bg-card'>
                <div className='container'>
                    <SectionTitle
                        title='Featured'
                        strokeTitle='Foods'
                        subTitle='Tasty Contributions'
                        classes='text-center mb-10 lg:mb-12'
                    ></SectionTitle>
                </div>
            </section>
        </>
    );
};

export default Home;