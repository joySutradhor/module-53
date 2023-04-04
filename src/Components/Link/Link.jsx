import React from 'react';

const Link = ({navitem}) => {
    const {name , path , id} = navitem ;
    
    return (
       <>
    
       <li className='p-2 md:ml-10 '>
        <a href={path} className='mr-5 hover:bg-red-400 p-1'>{name}</a>
       </li>
       </>
    );
};

export default Link;