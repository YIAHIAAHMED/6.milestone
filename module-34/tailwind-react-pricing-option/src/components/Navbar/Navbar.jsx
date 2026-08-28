import React from 'react';

const navLinks = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Projects", path: "/projects" },
  { id: 5, name: "Contact", path: "/contact" }
];

const Navbar = () => {
    return (
        <nav>
            <ul className='flex'>
                {
                    navLinks.map(link => (<li className='mr-10' key={link.id}><a href={link.path}>{link.name}</a></li>))
                }
            </ul>
            {/* <ul className='flex'>
                <li className='mr-10'><a href='/home'>Home</a></li>
                <li className='mr-10'><a href='/about'>About</a></li>
                <li className='mr-10'><a href='/blog'>Blog</a></li>
            </ul> */}
        </nav>
    );
};

export default Navbar;