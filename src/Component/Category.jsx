import React, { use } from 'react';
import { NavLink } from 'react-router';
  
  const Catagorypromise = fetch('/categories.json').then(res => res.json());

const Category = () => {
    const category = use(Catagorypromise);
    return (
        <div>
              <h2 className='font-bold'>All Caterogy</h2>

             <div className='grid grid-cols-1 mt-5 gap-3 '>
                 {
                category.map(cata => (
                <NavLink className={'btn border-0 bg-base-100 hover:bg-base-200  '} to={`/category/${cata.id}`} key={cata.id}>{cata.name}</NavLink>))
              }
             </div>
        </div>
    );
};

export default Category;