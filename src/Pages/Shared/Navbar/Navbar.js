import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const menuItem = <>
    <li className='text-xl text-white'><Link to="/">Home</Link></li>
    <li className='text-xl text-white'><Link to="/courses">Courses</Link></li>
    <li className='text-xl text-white'><Link to="/aboutus">About Us</Link></li>
    <li className='text-xl text-white'><Link to="/contact">Contact Us</Link></li>
    <li className='text-xl text-white'><Link to="/login">Login</Link></li>
  </>
  return (
    <div className="navbar z-10 bg-black sticky top-0">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn bg-black lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"/></svg>
        </label>
        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3  shadow bg-black text-white rounded-box w-56">
          {menuItem}
        </ul>
      </div>
      <Link to='/' className="lg:text-3xl  sm:text-xl text-white font-bold lg:ml-8 ml-6"><span className='text-purple-400 text-4xl'> O</span>nline <span className='text-purple-400'> Explore</span></Link>
    </div>
    <div className=" hidden lg:flex ">
    <ul className="menu menu-horizontal font-semibold p-0  ml-48">
        {menuItem}
      </ul>
    </div>
  </div>
  );
};

export default Navbar;