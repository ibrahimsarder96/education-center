import React from 'react';
import CardInfo from './CardInfo';

const Info = () => {
  return (
    <div>
      <h1 className='text-3xl my-16 text-center font-bold'>Explore Top <span className='text-orange-400'>Categories</span></h1>
      <p></p>
      <div className='grid grid-cols-1 gap-4 lg:grid-cols-3'>
      <CardInfo cardTitle="Machine Learning" bgclass="bg-gradient-to-r from-secondary to-primary" info="8:00 am - 8:00 pm"></CardInfo>
      <CardInfo cardTitle="Artificial Intelligence" bgclass="bg-slate-800" info="New York,NY,100016,U.S.A"></CardInfo>
      <CardInfo cardTitle="" bgclass="bg-gradient-to-r from-secondary to-primary" info="phone: 646-858-0219"></CardInfo>
      </div>
    </div>
  );
};

export default Info;