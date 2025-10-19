import React from 'react';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Findus = () => {
    return (
        <div>
            <h2 className='font-bold mb-5'>Find Us On</h2>
            <div>
                <div className="join join-vertical w-full">
                    <button className="bg-white justify-start btn join-item"><FaFacebook size={20} color='#3B599C' /> Facebook</button>
                    <button className="bg-white justify-start btn join-item"><AiFillTwitterCircle size={20} color='#58A7DE' /> Twitter</button>
                    <button className="bg-white justify-start btn join-item"><FaInstagram size={20} color='#E9686B' /> Instagram</button>
                </div>
            </div>
        </div>
    );
};

export default Findus;