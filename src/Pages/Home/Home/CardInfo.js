import React from 'react';
import 'animate.css';
const InfoCard = ({bgclass, cardTitle, info}) => {
  return (
    <div className={`animate__animated animate__bounceInUp card lg:card-side bg-base-100 shadow-xl ${bgclass}`}>
    <figure  className='pl-6 pt-4'>
      {/* <img src={img} alt="Album"/> */}
      </figure>
    <div className="card-body text-white">
      <h2 className="card-title">{cardTitle}</h2>
      <p>{info}</p>
    </div>
  </div>
  );
};

export default InfoCard;