import React from 'react';
import SocialLogin from '../Component/SocialLogin';
import Findus from '../Component/Findus';
import Qzone from '../Component/Qzone';

const Rightaside = () => {
    return (
        <div className='space-y-8'>
              <SocialLogin></SocialLogin>
              <Findus></Findus>
              <Qzone></Qzone>
        </div>
    );
};

export default Rightaside;