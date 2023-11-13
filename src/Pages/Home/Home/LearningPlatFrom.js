import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../../assets/achieve/m.jpg';
import img2 from '../../../assets/achieve/w.jpg';
import { ImCheckboxChecked } from 'react-icons/im';
import { MdSlowMotionVideo } from 'react-icons/md';
import './LearningPlatFrom.css';

const LearningPlatFrom = () => {
  const handleVideo = () =>{
      console.log('click')
  }
  return (
    <div>
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-0 gap-4 mb-16 mt-16'>
      <div>
        <h5 className='text-green-400 font-bold text-xl'>Best Online Learning Platform</h5>
        <h2 className='text-5xl font-bold my-5'>One Platfrom & Many</h2>
        <h2 className='text-5xl font-bold my-5'><span className='text-purple-600'>Courses</span> For You</h2>

        <div>
          <div className='bg-orange-400 w-24'></div>
        </div>
        <p className='text-xl text-gray-500 mt-4'>There Are Many Variations Of Passages Of Lorem Ipsum Available, But The Majority Have Suffered.</p>
        <section className='mt-5'>
       <div className='flex items-center'>
        <span className='text-green-500'> <ImCheckboxChecked></ImCheckboxChecked></span>
        <p className='text-xl text-gray-500 ml-5'>9/10 Average Satisfaction Rate</p>
       </div>
       <div className='flex items-center my-4'>
        <span className='text-green-500'> <ImCheckboxChecked></ImCheckboxChecked></span>
        <p className='text-xl text-gray-500 ml-5'>96% Completitation Rate</p>
       </div>
       <div className='flex items-center'>
        <span className='text-green-500'> <ImCheckboxChecked></ImCheckboxChecked></span>
        <p className='text-xl text-gray-500 ml-5'>Friendly Environment & Expert Teacher</p>
       </div>
        <Link to='/'><button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 dark:focus:ring-gray-400 font-medium rounded-lg text-semibold px-8 py-5 text-center mr-2 mb-2 mt-10">Explore Our Courses</button></Link>
        </section>
      </div>
      <div className='relative lg:flex'>
        <div  className='lg:mr-16 '>
        <MdSlowMotionVideo> <video width="420" height="315"
src="https://www.youtube.com/embed/tgbNymZ7vqY?playlist=tgbNymZ7vqY&loop=1">
</video></MdSlowMotionVideo>
         <h1 id="card" className='card text-black absolute'><span className='inline'>Demo Videos</span>How Can You Starts</h1>
        </div>
        <img className='w-72 h-72 rounded lg:ml-0 ml-8'  src={img2} alt="mission" />
        <img className='w-72 h-72 mt-56 ml-8 rounded-md' src={img1} alt="mission" />
      </div>
    </section>
    </div>
  );
};

export default LearningPlatFrom;