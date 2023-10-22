import React from 'react';
import './CourseDetails.css';
import { Link } from 'react-router-dom';
const CourseDetails = ({course}) => {
  const {title, instructor, price, ratings} = course;
  console.log(title)
  return (
    <div>
      <div id='bg' className="card w-full">
  <figure className=" pt-10">
    <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-start font-bold">{title}</h2> 
    <p className=" text-start">{instructor}</p>
    <h2 className="text-start">{ratings}</h2>
    <p className='text-xl font-bold'>$ {price}</p>
    <div className="card-actions">
      <Link><button className="bg-purple-400 px-2 py-1 hover:text-white">Bestsellers</button></Link>
    </div>
  </div>
</div>
    </div>
  );
};

export default CourseDetails;