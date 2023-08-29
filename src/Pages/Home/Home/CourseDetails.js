import React from 'react';

const CourseDetails = ({course}) => {
  const {name, language} = course;
  console.log(name)
  return (
    <div>
      <div className="card w-full bg-black shadow-xl">
  <figure className=" pt-10">
    <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default CourseDetails;