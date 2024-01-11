import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className='w-full bg-baigan p-3'>
        <div className="flex justify-between items-center">
          <div className='ml-6'>
            <h2 className="text-white font-windsong text-4xl ">hoori</h2>
          </div>

          <div className="hidden md:flex capitalize font-light w-1/5 ">
            <div className='mr-6 pl-3  hover:text-pinky'>
              about 
            </div>
            <div className='mr-6 pl-3  hover:text-pinky'>
              my projects
            </div>
            <div className='mr-6 pl-3  hover:text-pinky'>
              skills
            </div>
          </div>

          <div className='md:hidden'>
            <button onClick={toggleNavbar} className="text-white">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          
          <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} mt-4`}>
            <div className='mb-2'>
              <button className="text-white">about</button>
            </div>
            <div className='mb-2'>
              <button className="text-white">my projects</button>
            </div>
            <div className='mb-2'>
              <button className="text-white">skills</button>
            </div>
          </div>

          <div className='md:flex mr-4'>
            <button className="bg-baigan border border-white border-2px hover:bg-white hover:text-baigan text-white font-bold py-2 px-4 rounded">
              Contact
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
