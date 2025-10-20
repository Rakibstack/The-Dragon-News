import React from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { Link } from 'react-router';

const Newsdetailscard = ({news}) => {
    const {category_id,title,details,image_url} = news;

    return (
        <div>
                <h2 className='font-bold mb-4'>Dragon News</h2>
                <div className='space-y-5 p-6 shadow-lg border-1 border-gray-200'>
                    <img className='w-full rounded-md' src={image_url} alt="" />
                    <h2 className='font-bold text-[1.5rem]'>{title}</h2>
                    <p className='text-[#706F6F] '>{details}</p>
                    
             <Link className='flex gap-2 items-center px-6 py-2 bg-secondary w-[280px] text-white' to={`/category/${category_id}`}> <FaArrowLeftLong /> All news in this category</Link>
                  
                </div>
        </div>
    );
};

export default Newsdetailscard;