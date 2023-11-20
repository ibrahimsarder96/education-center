import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const StudentFeedback = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const url = 'reviews.json';
    fetch(url)
    .then(res => res.json())
    .then(data => setReviews(data));
  }, []);
  return (
    
      <section className='my-24'>
       <h1 className='text-4xl font-bold text-center text-primary'>Success_ Story</h1>
       <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper my-16"
      >
       
       {
        reviews.map(review =>  <SwiperSlide
        key={review.id}
        >
          <div className='mx-20'>
            <div className='flex items-center justify-center'>
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img className='' src={review.img} alt="" />
              </div>
            </div>
            <h1 className='text-2xl font-bold text-red-400 ml-6'>{review.name}</h1>
            </div> 
            <p className='mt-5'>{review.details}</p>
          </div>
        </SwiperSlide>)
       }
      </Swiper>
      </section>
  );
};

export default StudentFeedback;