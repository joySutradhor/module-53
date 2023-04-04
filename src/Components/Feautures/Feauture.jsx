import React from 'react';
import { ArrowLongRightIcon } from '@heroicons/react/24/solid'

const Feauture = ({feautre}) => {
    return (
        <div className='flex'>
        <ArrowLongRightIcon className="h-6 w-6 mr-1 text-blue-500" />
            <span> {feautre} </span>
        </div>
        
    );
};

export default Feauture;