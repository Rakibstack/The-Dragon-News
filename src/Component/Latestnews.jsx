import React from 'react';
import Marquee from 'react-fast-marquee';

const Latestnews = () => {
    return (
        <div className='flex  gap-5 items-center bg-base-200 p-4 px-4 rounded-md'>
            <h2 className='bg-secondary px-6 py-2 text-white'>Latest</h2>
            <Marquee className='flex gap-5' speed={70} pauseOnHover={true} direction='right'>
               <p className='font-medium'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as... Laborum dicta vel.</p>
                <p className='font-medium'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as... Laborum dicta vel.</p>
            </Marquee>
           
        </div>
    );
};

export default Latestnews;