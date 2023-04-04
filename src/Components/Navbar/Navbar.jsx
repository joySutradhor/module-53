import React from 'react';

const Navbar = () => {
  const navbar =   [
        {id: 1, name: "Home", path: "/"},
        {id: 2, name: "About Us", path: "/about"},
        {id: 3, name: "Services", path: "/services"},
        {id: 4, name: "Products", path: "/products"},
        {id: 5, name: "Blog", path: "/blog"},
        {id: 6, name: "Contact Us", path: "/contact"}
      ]
      
    return (
        <div>
            {
                navbar.map(navItem => <li className='list-none'> {navItem.name}</li>)
            }
        </div>
    );
};

export default Navbar;