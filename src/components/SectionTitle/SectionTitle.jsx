import React from 'react';

const SectionTitle = ({ title, strokeTitle, subTitle, classes }) => {
    return (
        <div className={`${classes}`}>
            <h5 className='font-Damion text-ps-primary text-xl md:text-2xl mb-1.5'>{subTitle}</h5>
            <h1 className='text-4xl md:text-[44px] text-heading font-bold'>{title} <span className='text-transparent [-webkit-text-stroke:1px_#80B500]'>{strokeTitle}</span></h1>
        </div>
    );
};

export default SectionTitle;