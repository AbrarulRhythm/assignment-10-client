import React, { Suspense } from 'react';
import HeroSlider from '../../components/HeroSlider/HeroSlider';
import PrimaryCard from '../../components/PrimaryCard/PrimaryCard';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { Link } from 'react-router';
import CommunityImpact from '../../components/CommunityImpact/CommunityImpact';
import OurPartners from '../../components/OurPartners/OurPartners';
import BlogCard from '../../components/BlogCard/BlogCard';
import useAxios from '../../hooks/useAxios';
import FeaturedFoods from '../../components/FeaturedFoods/FeaturedFoods';

const blogData = [
    {
        id: 1,
        image: 'https://i.ibb.co.com/F4xvh9tb/Rectangle-79.png',
        category: 'Community Impact',
        title: 'How Food Donations Help Fight Hunger in Your Community',
        desc: 'Explore how small acts of food donations can create lasting change and help families in need. Learn the importance of giving back and how every donation counts.',
        publish_date: '27 August',
        read: '12 Mins Read',
        views: '23K Views'
    },
    {
        id: 2,
        image: 'https://i.ibb.co.com/HD98zPJL/Rectangle-79-1.png',
        category: 'Getting Started',
        title: '5 Easy Ways to Start Donating Food Today',
        desc: "Whether you're new to food donations or looking for ways to do more, this guide offers simple tips to get you started in making a difference.",
        publish_date: '26 August',
        read: '12 Mins Read',
        views: '23K Views'
    },
    {
        id: 3,
        image: 'https://i.ibb.co.com/RG8cybGL/Rectangle-80.png',
        category: 'Sustainability',
        title: 'Reducing Waste While Helping Others',
        desc: 'Learn how sustainable food donation practices can reduce waste and provide nourishment to communities, while also protecting the environment.',
        publish_date: '18 August',
        read: '12 Mins Read',
        views: '23K Views'
    }
];

const fetchFeaturedFoods = async (axiosInstance) => {
    const res = await axiosInstance.get('/featured-foods');
    return res.data;
};

const Home = () => {
    const axiosInstance = useAxios();
    const featuredFoodsPromise = fetchFeaturedFoods(axiosInstance);

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

                    <div className='featured-foods-wrap'>
                        <Suspense fallback={<p>Featured food is loaidng...</p>}>
                            <FeaturedFoods
                                featuredFoodsPromise={featuredFoodsPromise}
                            ></FeaturedFoods>
                        </Suspense>
                    </div>
                    <div className='mt-6 text-center'>
                        <Link to='/foods' className='button'>Show All Foods</Link>
                    </div>
                </div>
            </section>

            {/* Community Impact */}
            <CommunityImpact></CommunityImpact>

            {/* Our Partners */}
            <OurPartners></OurPartners>

            {/* Blog Section */}
            <section className='py-14 lg:py-20'>
                <div className='container'>
                    <SectionTitle
                        title='Our Recent'
                        strokeTitle='Posts'
                        subTitle='Form Out Blog'
                        classes='text-center mb-10 lg:mb-12'
                    ></SectionTitle>

                    <div className='flex flex-wrap -mx-3'>
                        {
                            blogData.map((data) => {
                                return (
                                    <BlogCard
                                        key={data.id}
                                        data={data}
                                    ></BlogCard>
                                )
                            })
                        }
                    </div>
                    <div className='mt-6 text-center'>
                        <Link to='/' className='button'>Read More Blogs</Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;