import React from 'react';
import  './CoreFeatures.css';
import { AiOutlineGlobal } from 'react-icons/ai';
import { LiaChalkboardTeacherSolid } from 'react-icons/lia';
import { FaHandshake} from 'react-icons/fa';
const CoreFeatures = () => {
  return (
    <div className='mt-16 bg-gradient-to-br py-8 from-purple-100 to-blue-200 h-full rounded'>
      <h1 className='text-xl text-green-500 text-center font-bold'>Core Features</h1>
      <h2 className='text-5xl font-bold text-center'>Why <span className='text-purple-600'>Choose</span> Edumim</h2>
      <section className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-20 my-24 mx-8'>
        <div id='card-bg' className='bg-white  hover:bg-purple-600 hover:text-white  h-72 rounded'>
          <span id='icon' className=''>< AiOutlineGlobal /></span>
          <h4 className='text-2xl font-bold mx-6'>Learn More Anywhere</h4>
          <p className='text-xl mt-5 mx-6'>Learn From Anywhere In World On Desktop, Mobile Or Tablet With An Internet Connection.</p>
        </div>
        <div className='bg-white hover:text-white hover:bg-purple-600 h-72 rounded'>
        <span id='icon' className=''>< LiaChalkboardTeacherSolid /></span>
          <h4 className='text-2xl font-bold mx-6'>Expert Instructor</h4>
          <p className='text-xl mt-5 mx-6'>Learn From Anywhere In World On Desktop, Mobile Or Tablet With An Internet Connection.</p>
        </div>
        <div className='bg-white hover:text-white hover:bg-purple-600 h-72 rounded'>
        <span id='icon' className=''>< FaHandshake/></span>
          <h4 className='text-2xl font-bold mx-6'>24/7 Strong Support</h4>
          <p className='text-xl mt-5 mx-6'>Learn From Anywhere In World On Desktop, Mobile Or Tablet With An Internet Connection.</p>
        </div>
      </section>
    </div>
  );
};

export default CoreFeatures;