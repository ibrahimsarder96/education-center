import React from 'react';
import CourseDetails from './CourseDetails';

const CourseCategories = () => {
  let courses = [
    {
      id: 1,
      name: 'Machine Learning',
      course: 64,
      language: 'Html, Css, JavaScript'
    },
    {
      id: 2,
      name: 'Artificial Intelligence',
      course: 64,
      language: 'Html, Css, JavaScript'
    },
    {
      id: 3,
      name: 'Linux Programming',
      course: 64,
      language: 'Html, Css, JavaScript'
    },
    {
      id: 4,
      name: 'App Development',
      course: 64,
      language: 'Html, Css, JavaScript'
    },
    {
      id: 5,
      name: 'Web Development',
      course: 64,
      language: 'Html, Css, JavaScript'
    },
    {
      id: 6,
      name: 'Web Design',
      course: 64,
      language: 'Html, Css, JavaScript'
    },
    {
      id: 7,
      name: 'Data Science',
      course: 64,
      language: 'Html, Css, JavaScript'
    },
    {
      id: 8,
      name: 'UI/UX Design',
      course: 64,
      language: 'Html, Css, JavaScript'
    },
  ]
  return (
    <div className='my-20'>
      <h1 className='text-center font-bold text-xl text-green-500'>Start Learning From Today</h1>
      <h1 className='text-center font-bold text-3xl'>Popular Topics To Learn</h1>
      <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 mt-10 gap-6'>
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