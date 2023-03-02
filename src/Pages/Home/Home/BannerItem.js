import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const BannerItem = ({slider}) => {
  const {image, id, prev, next} = slider;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className='slide-img'>
      <img id='banner' src={image} className="min-h-screen rounded-xl" alt='' />
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 top-1/4">
       <h1 className='text-white font-bold lg:text-6xl sm:text-xl'>Find The Most <br />
       Exciting Online Courses
       </h1>
      </div>
      <div className="absolute flex justify-start transform -translate-y-1/2 left-5 top-2/4">
      <p className='text-white text-xl w-1/2'>Improve your coding skills to the next level by solving tons of fun coding challenges in more than 25 languages and data structures.OnlineExplore lets you practice coding in pure code with online games. You can also learn other programming languages crafted by their top developers. Strengthening your coding skills could also land you a job with their partner companies.</p>
      </div>
      <div className="absolute flex justify-start transform -translate-y-1/2 left-5 top-3/4">
        <Link to='/'><button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-gray-400 font-medium rounded-lg text-semibold px-8 py-5 text-center mr-2 mb-2">Explore more</button></Link>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a> 
        <a href={`#slide${next}`} className="btn btn-circle">❯</a>
      </div>
    </div> 
  );
};

export default BannerItem;