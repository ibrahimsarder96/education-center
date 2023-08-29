import React from 'react';
import Banner from './Banner';
import CourseCategories from './CourseCategories';
import Info from './Info';
import Achieve from './Achieve';
import Brand from './Brand';


const Home = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Banner></Banner>
      <Achieve></Achieve>
      <Brand></Brand>
      <Info></Info>
      <CourseCategories></CourseCategories>
    </div>
  );
};

export default Home;