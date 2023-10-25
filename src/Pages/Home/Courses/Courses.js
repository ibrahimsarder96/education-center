import React, { useEffect, useState } from 'react';
import CoursesAll from './CoursesAll';


const Courses = () => {
  const [courses, setCourses] = useState([]);
 
  useEffect(() => {
      fetch('courses.json')
          .then(res => res.json())
          .then(data => setCourses(data));     
  }, []);
  return (
    <div>
      <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-5 mt-10 gap-6'>
        {
          courses.map((course) => <CoursesAll
          key={course.id}
          course={course}
          ></CoursesAll>)
        }
      </div>
    </div>
  );
};

export default Courses;