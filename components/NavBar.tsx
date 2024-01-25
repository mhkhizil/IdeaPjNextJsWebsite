import React from 'react';

const Navbar = () => {
  return (
    <div className="   mt-[51px] me-[110px] fixed top-0 right-0  bg-transparent z-50 ">
      {/* Your navigation content goes here */}
      <nav className="">
        <ul className="flex items-center w-[228px]   justify-around ">
          <li className=' leading-[36.57px] me-[36px] text-white font-mont  font-bold text-navigation'>Home</li>
          <li className=' leading-[36.57px] text-white font-mont font-bold   text-navigation'>About</li>
         
          {/* Add more menu items as needed */}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
