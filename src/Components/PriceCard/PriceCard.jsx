import React from 'react';
import Feauture from '../Feautures/Feauture';

const PriceCard = ({price}) => {
    return (
        <div className='bg-red-100 p-8 rounded-md flex flex-col h-[300px]'>
            <h3 className='text-3xl text-red-500 text-center'> Price : {price.price}</h3>
            <h2 className='text-xl text-center mb-2'> Product Name : {price.name}</h2>
            {
                price.features.map((feature , idx) => <Feauture
                key = {idx}
                feautre={feature}
                
                > </Feauture>)
            }
            <button className='bg-green-300 p-2 rounded-md w-full mt-auto'>Buy now</button>
        </div>
    );
};

export default PriceCard;