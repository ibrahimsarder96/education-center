import React from 'react';
import Banner from './Banner';
import CourseCategories from './CourseCategories';
import Info from './Info';
import Achieve from './Achieve';
import Brand from './Brand';
import CoreFeatures from './CoreFeatures';
import LearningPlatFrom from './LearningPlatFrom';
import StudentFeedback from './StudentFeedback';
import CollectInformation from './CollectInformation';



const Home = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Banner></Banner>
      <Achieve></Achieve>
      <Brand></Brand>
      <CoreFeatures></CoreFeatures>
      <LearningPlatFrom></LearningPlatFrom>
      <Info></Info>
      <CourseCategories></CourseCategories>
      <CollectInformation></CollectInformation>
      <StudentFeedback></StudentFeedback>
    </div>
  );
};

export default Home;