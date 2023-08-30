import React from 'react';
import img1  from  '../../../assets/brand/img1.svg';
import img2  from  '../../../assets/brand/img2.svg';
import img3  from  '../../../assets/brand/img3.svg';
import img4  from  '../../../assets/brand/img4.svg';
import img5  from  '../../../assets/brand/img5.svg';


const Brand = () => {
  return (
    <div className='mt-24'>
      <h1 className='text-xl font-bold text-center'><span className='text-purple-600'>Trusted</span> By 2k+ Company Arround The World!</h1>
      <div className='lg:flex my-10'>
        <img className='lg:ml-0 lg:mt-0 mt-16 md:ml-36 w-56 ml-20 hover:cursor-pointer' src={img1} alt="" />
        <img className='lg:ml-44 lg:mt-0 mt-16 md:ml-36 w-56 ml-20 hover:cursor-pointer' src={img2} alt="" />
        <img className='lg:ml-40 lg:mt-0 mt-16 md:ml-36 w-56 ml-20 hover:cursor-pointer' src={img3} alt="" />
        <img className='lg:ml-44 lg:mt-0 mt-16 md:ml-36 w-56 ml-20 hover:cursor-pointer' src={img4} alt="" />
        <img className='lg:ml-40 lg:mt-0 mt-16 md:ml-36 w-56 ml-20 hover:cursor-pointer' src={img5} alt="" />
      </div>
    </div>
  );
};

export default Brand;