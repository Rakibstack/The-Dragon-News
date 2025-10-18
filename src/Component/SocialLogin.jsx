import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-bold mb-5'>Login With</h2>
           <div className='flex flex-col gap-2'>
              <button className='btn btn-outline text-blue-400'><FcGoogle size={24} /> Login With Google</button>
            <button className='btn btn-outline text-primary'><FaGithub size={24} /> Login With Github</button>

           </div>
        </div>
    );
};

export default SocialLogin;