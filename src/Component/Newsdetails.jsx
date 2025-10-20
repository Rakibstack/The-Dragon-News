import React, { useEffect, useState } from 'react';
import Header from './Header';
import Rightaside from '../Homelayout/Rightaside';
import { useLoaderData, useParams } from 'react-router';
import Newsdetailscard from './Newsdetailscard';

const Newsdetails = () => {
    const data = useLoaderData();
    const {id} = useParams();
    const [news, setnews] = useState([]);
    
    useEffect(() => {
     
      const newsdetails = data.find(singledata => singledata.id == id)
    setnews(newsdetails);

    },[data,id])
    
    return (
        <div>
             <header>
         <Header></Header>
             </header>
             <main className='w-10/12 mx-auto grid grid-cols-12 gap-8'>
               <section className='col-span-9'>
              <Newsdetailscard news={news}></Newsdetailscard>
               </section>
               <section className='col-span-3'>
            <Rightaside></Rightaside>
               </section>
             </main>
        </div>
    );
};

export default Newsdetails;