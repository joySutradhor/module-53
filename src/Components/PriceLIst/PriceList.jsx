import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const PriceList = () => {
    const [prices , setPrices] = useState([]) ;
    useEffect ( () => {
        fetch('data.json')
        .then (res => res.json())
        .then (data => setPrices(data))
    } , [])
    return (
        <div>
            <h1 className='text-3xl text-red-400 text-center my-5'>My Card plan</h1>
       <div className='grid md:grid-cols-3 md:gap-5 grid-cols-1 gap-2 p-4'>
       {
            prices.map(price => <PriceCard
                
                key ={price.id}
                price = {price}
                
                > </PriceCard>)
        }
       </div>


        </div>
    );
};

export default PriceList;