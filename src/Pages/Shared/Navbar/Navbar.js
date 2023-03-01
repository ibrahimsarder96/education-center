import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const menuItem = <>
    <li className='text-xl '><Link to="/">Home</Link></li>
    <li className='text-xl '><Link to="/">Home</Link></li>
    <li className='text-xl '><Link to="/">Home</Link></li>
    <li className='text-xl '><Link to="/">Home</Link></li>
  </>
  return (
    <div>
     <div className="navbar sticky top-0">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn bg-black lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-400 rounded-box w-52">
        {menuItem}
      </ul>
    </div>
    <Link to='/' className="text-3xl font-semibold text-white">Online Explore</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
  <ul className="menu menu-horizontal p-0 pl-96 ml-64">
      {menuItem}
    </ul>
  
  </div>
  <div className="navbar-end">
  <label htmlFor='dashboard-sidebar' tabIndex={0} className="btn bg-black lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
  </div>
</div>
    </div>
  );
};

export default Navbar;