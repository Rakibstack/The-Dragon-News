import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../Component/NewsCard';
   
    
const Categorynews = () => {
    const {id} = useParams();
    const paramid =parseInt(id)
    const data = useLoaderData();

    const [categoriesnews ,setcategoriesnews ] = useState([]);
    
    useEffect(() => {
       if(paramid === 0){
        setcategoriesnews(data)
        return; 
       }else if (paramid === 1) {
        const filternews = data.filter(news => news.others.is_today_pick == true);
           setcategoriesnews(filternews)
       }else{
        const filternews = data.filter(news => news.category_id === paramid);
           setcategoriesnews(filternews) 
       }     
    },[data,paramid])
    return (
        <div>
              <h2 className='font-bold mb-6'>Tottal <span className='text-secondary'>{categoriesnews.length}</span> News Found</h2>

              <div className='grid grid-cols-1 gap-5 '>
                {
                  categoriesnews.map(news => (
                    <NewsCard key={news.id} news={news}></NewsCard>
                  ))  
                }

              </div>
       </div>
    );
};

export default Categorynews;