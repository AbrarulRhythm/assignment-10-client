import React from 'react';

// Image
import icon01 from '../../assets/primaty-icon-01.png';
import icon02 from '../../assets/primaty-icon-02.png';
import icon03 from '../../assets/primaty-icon-03.png';
import { Link } from 'react-router';

const primaryCardData = [
    {
        id: 1,
        icon: icon01,
        title: "Share Food, Spread Love",
        desc: "Donate your extra meals to help those in need. Every shared plate brings hope to another heart.",
        button: "Learn More",
        buttonLink: '/'
    },
    {
        id: 2,
        icon: icon02,
        title: "Be a Food Hero",
        desc: "Join hands with our community of volunteers to collect, pack, and distribute food across the city.",
        button: "Join Now",
        buttonLink: '/'
    },
    {
        id: 3,
        icon: icon03,
        title: "Feed Local Families",
        desc: "Support families in your neighborhood by donating groceries or sponsoring a meal today.",
        button: "Get Involved",
        buttonLink: '/'
    }
]

const PrimaryCard = () => {
    return (
        <section className='primary-card pt-14 pb-8 lg:pt-20 lg:pb-14'>
            <div className='container'>
                <div className='flex flex-wrap -mx-3 justify-center'>
                    {
                        primaryCardData.map(data => {
                            return (
                                <div key={data.id} className='w-full md:w-6/12 lg:w-4/12 px-3 mb-6'>
                                    <div className='px-6 py-12 rounded-md border border-dark-04 bg-white hover:bg-card hover:border-card duration-300 text-center'>
                                        <img src={data.icon} className='mx-auto mb-4' alt='Card Icon' />
                                        <h3 className='text-2xl font-semibold text-heading mb-2'>{data.title}</h3>
                                        <p className='mb-6'>{data.desc}</p>
                                        <Link to={data.buttonLink} className='text-ps-primary/70 font-medium hover:text-ps-primary duration-200'>{data.button}</Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default PrimaryCard;