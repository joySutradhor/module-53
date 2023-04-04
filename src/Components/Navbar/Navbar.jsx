import React, { useState } from 'react';
import Link from '../Link/Link';
import {  Bars3BottomLeftIcon , XMarkIcon} from '@heroicons/react/24/solid'

const Navbar = () => {
    const [isOpen , setIsOpen] = useState(false) ;
  const navbar =   [
        {id: 1, name: "Home", path: "/"},
        {id: 2, name: "About Us", path: "/about"},
        {id: 3, name: "Services", path: "/services"},
        {id: 4, name: "Products", path: "/products"},
        {id: 5, name: "Blog", path: "/blog"},
        {id: 6, name: "Contact Us", path: "/contact"}
      ]
      
    return (
        <nav>
            <div onClick={() => setIsOpen(!isOpen)} className='md:hidden ml-2'>
                <span> { isOpen ?  <XMarkIcon className="h-6 w-6 text-red-500" /> : <Bars3BottomLeftIcon className="h-6 w-6 text-blue-500" />}</span>
            
            
            </div>
            <ul className={`md:flex  bg-red-200 absolute md:static duration-500 ${isOpen ? "left-0" : "-left-36"}`}>
            {
                navbar.map(navItem => <Link 
                key={navItem.id}
                navitem={navItem}
                ></Link>)
            }
            </ul>
        </nav>
    );
};

export default Navbar;