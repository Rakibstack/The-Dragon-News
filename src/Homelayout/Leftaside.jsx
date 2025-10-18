import React, { Suspense } from 'react';
import Category from '../Component/Category';

const Leftaside = () => {
    return (
        <div>
            <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
           <Category></Category>
            </Suspense>
           
        </div>
    );
};

export default Leftaside;