import React from 'react';
import Banner from './Banner';
import CourseCategories from './CourseCategories';
import Info from './Info';
import Achieve from './Achieve';


const Home = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Banner></Banner>
      <Achieve></Achieve>
      <Info></Info>
      <CourseCategories></CourseCategories>
    </div>
  );
};

export default Home;