import React from 'react';
import img from '../../../assets/achieve/img1.png';
import mission from '../../../assets/achieve/mission.svg';
import vision from '../../../assets/achieve/vision.svg';
import { Link } from 'react-router-dom';
import './Achieve.css';
const Achieve = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-0 gap-4 mb-16 mt-16'>
      <div>
        <img src={img} alt="mission" />
      </div>
      <div>
        <h5 id='firstHead' className=' text-green-400 font-bold text-xl'>About Edumim</h5>
        <h2 id='secondHead' className='heading text-5xl font-bold my-5'>The Place Where You Can</h2>
        <div>
          <p id="third" className=' text-4xl font-bold text-purple-600'>Achieve</p>
          <div className='bg-orange-400 w-24 '></div>
        </div>
        <p id='info' className='text-xl text-gray-500 mt-4'>There Are Many Variations Of Passages Of Lorem Ipsum Available, But The Majority Have Suffered.</p>
        <section className='mt-5'>
        <div className='box lg:flex mt-10'>
          <img src={mission} alt="" />
        <div className='ml-4'>
        <h3 className='text-2xl font-bold'>Our Mission</h3>
        <p className='text-xl text-gray-500 mt-4'>There Are Many Variations Of Passages Of The Lorem Ipsum Available.</p>
        </div>
        </div>
        <div className='box lg:flex mt-10'>
        <img src={vision} alt="" />
       <div className='ml-4'>
       <h3 className='text-2xl font-bold'>Our Vision</h3>
        <p className='text-xl text-gray-500 mt-4'>There Are Many Variations Of Passages Of The Lorem Ipsum Available.</p>
       </div>
        </div>
        <Link to='/'><button type="button" class="md-btn text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 dark:focus:ring-gray-400 font-medium rounded-lg text-semibold px-8 py-5 text-center mr-2 mb-2 mt-10">Read more us</button></Link>
        </section>
      </div>
    </section>
  );
};

export default Achieve;