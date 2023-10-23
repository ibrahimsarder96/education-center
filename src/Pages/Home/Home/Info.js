import React from 'react';
import CardInfo from './CardInfo';

const Info = () => {
  return (
    <div>
      <h1 className='text-3xl text-center font-bold'>Explore Top <span className='text-orange-400'>Categories</span></h1>
      <p></p>
      <div className='grid grid-cols-1 my-14 gap-4 lg:grid-cols-3'>
      <CardInfo cardTitle="Machine Learning" bgclass="bg-gradient-to-r from-secondary to-primary" info="4 course"></CardInfo>
      <CardInfo cardTitle="Artificial Intelligence" bgclass="bg-gradient-to-r from-primary to-secondary" info="2 course"></CardInfo>
      <CardInfo cardTitle="Linux Programming" bgclass="bg-gradient-to-r from-secondary to-primary" info="1 course"></CardInfo>
      <CardInfo cardTitle="Web Development" bgclass="bg-gradient-to-r from-secondary to-primary" info="5 course"></CardInfo>
      <CardInfo cardTitle="Web Design" bgclass="bg-slate-800" info="3 course"></CardInfo>
      <CardInfo cardTitle="App Development" bgclass="bg-gradient-to-r from-secondary to-primary" info="1 course"></CardInfo>
      </div>
    </div>
  );
};

export default Info;