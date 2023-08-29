import React from 'react';
import CourseDetails from './CourseDetails';

const CourseCategories = () => {
  let courses = [
    {
      id: 1,
      Name: 'Web Development',
      Language: 'Html, Css, JavaScript'
    },
    {
      id: 2,
      Name: 'Web Development',
      Language: 'Html, Css, JavaScript'
    },
    {
      id: 3,
      Name: 'Web Development',
      Language: 'Html, Css, JavaScript'
    },
  ]
  return (
    <div>
      <h1 className='text-center font-bold text-xl text-orange-400'>...Popular Categories...</h1>
      <h1 className='text-center font-bold text-3xl'>Course Categories</h1>
      <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {
          courses.map((course) => <CourseDetails
          key={course.id}
          course={course}
          ></CourseDetails>)
        }
      </div>
    </div>
  );
};

export default CourseCategories;