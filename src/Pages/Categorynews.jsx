import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
   
    
const Categorynews = () => {
    const {id} = useParams();
    const paramid =parseInt(id)
    const data = useLoaderData();

    const [categoriesnews ,setcategoriesnews ] = useState([]);
    
    useEffect(() => {
        const filternews = data.filter(news => news.category_id == paramid);
           setcategoriesnews(filternews)       
    },[data,paramid])
    return (
        <div>
              <h2>Catagories news {categoriesnews.length}</h2>
       </div>
    );
};

export default Categorynews;