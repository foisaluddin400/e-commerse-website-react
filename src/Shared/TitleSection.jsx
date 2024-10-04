import React from 'react';

const TitleSection = ({heading,title}) => {
    return (
        <div className='pl-3'>
            <h1 className='text-red-600 text-xl'>{heading}</h1>
            <h1 className=' text-4xl font-semibold'>{title}</h1>
        </div>
    );
};

export default TitleSection;