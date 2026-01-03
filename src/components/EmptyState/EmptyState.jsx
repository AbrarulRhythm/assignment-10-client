import React from 'react';

const EmptyState = ({ classes = 'text-center', message, icon }) => {
    return (
        <div className={`${classes} mb-6`}>
            {icon && <>
                <img src={icon} alt="icon" className='mx-auto mb-4' />
            </>}
            <p className='text-lg'>{message}</p>
        </div>
    );
};

export default EmptyState;