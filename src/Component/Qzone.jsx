import React from 'react';
import swimmingimg from '.././assets/swimming.png'
import classimg from '.././assets/class.png'
import playimg from '.././assets/playground.png'

const Qzone = () => {
    return (
        <div className='bg-base-200 p-4'>
              <div>
                <h2 className='font-bold mb-3'>Qzone</h2>
                <div className='space-y-2'>
                    <img src={swimmingimg} alt="" />
                    <img src={classimg} alt="" />
                    <img src={playimg} alt="" />
                </div>
              </div>
        </div>
    );
};

export default Qzone;