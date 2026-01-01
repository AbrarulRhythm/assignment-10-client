import React from 'react';
import { Link } from 'react-router';

const BlogCard = ({ data, ...rest }) => {
    const { image, title, category, publish_date, read, views, desc } = data;

    return (
        <div {...rest} className='w-full md:w-6/12 lg:w-4/12 px-3 mb-6'>
            <div className='blog-card-wrapper h-full bg-white border border-dark-04 rounded-md group'>
                <div className='blog-image rounded-t-md overflow-hidden'>
                    <img src={image} className='w-full rounded-t-md group-hover:scale-110 duration-300' alt='Blog Image' />
                </div>
                <div className='p-6'>
                    <Link to='/' className='text-ps-primary hover:underline font-medium text-sm inline-block mb-3'>{category}</Link>
                    <h4 className='text-xl font-semibold text-heading hover:text-ps-primary duration-300 mb-4'>
                        <Link to=''>{title}</Link>
                    </h4>
                    <p>{desc}</p>
                    <div className='blog-meta mt-6'>
                        <ul className='text-sm'>
                            <li>{publish_date}</li>
                            <li>{read}</li>
                            <li>{views}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;