import React from 'react';
import SectionBanner from '../../components/SectionBanner/SectionBanner';

const News = () => {
    return (
        <>
            <title>News - PlateShare</title>

            <SectionBanner
                title='Latest News'
                currentPage='News'
            ></SectionBanner>
        </>
    );
};

export default News;