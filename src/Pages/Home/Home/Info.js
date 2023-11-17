import React from 'react';
import CardInfo from './CardInfo';

const Info = () => {
  return (
    <div>
      <h1 className='text-3xl text-center -mb-16 font-bold'>Explore Top <span className='text-orange-400'>Categories</span></h1>
      <div className='grid grid-cols-1  gap-6 p-0 lg:grid-cols-3'>
      <CardInfo cardTitle="Machine Learning" bgclass="bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600" info="4 course"></CardInfo>
      <CardInfo cardTitle="Artificial Intelligence" bgclass="bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700" info="2 course"></CardInfo>
      <CardInfo cardTitle="Linux Programming" bgclass="bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600" info="1 course"></CardInfo>
      <CardInfo cardTitle="Web Development" bgclass="bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600" info="5 course"></CardInfo>
      <CardInfo cardTitle="Web Design" bgclass="bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700" info="3 course"></CardInfo>
      <CardInfo cardTitle="App Development" bgclass="bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600" info="1 course"></CardInfo>
      </div>
    </div>
  );
};

export default Info;