import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';

const navLinks = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Projects", path: "/projects" },
  { id: 5, name: "Contact", path: "/contact" }
];

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const links = navLinks.map(link => (<li className='px-4 lg:mr-10 hover:bg-amber-300 mt-4' key={link.id}><a href={link.path}>{link.name}</a></li>))
    return (
        <nav className='flex justify-between mx-10'>
            <span className='flex' onClick={()=> setOpen(!open)}>
                {
                    open? 
                    <X className='md:hidden'></X> : 
                    <Menu className='md:hidden'></Menu>
                }
                <ul className= {`md:hidden absolute duration-1000 ${open? 'top-8' : '-top-40'} bg-amber-200 text-black`}>
                    {links}
                </ul>
                <h3 className='ml-4' >My Navbar</h3>
            </span>
            
            <ul className='md:flex hidden'>
                {
                    links
                }
            </ul>
            {/* <ul className='flex'>
                <li className='mr-10'><a href='/home'>Home</a></li>
                <li className='mr-10'><a href='/about'>About</a></li>
                <li className='mr-10'><a href='/blog'>Blog</a></li>
            </ul> */}
            <button>Sign In</button>
        </nav>
    );
};

export default Navbar;