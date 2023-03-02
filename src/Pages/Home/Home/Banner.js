import React from 'react';
import BannerItem from './BannerItem';
import banner1 from '../../../assets/images/banner/3.jpg';
import banner2 from '../../../assets/images/banner/2.jpg';
import banner3 from '../../../assets/images/banner/1.jpg';

const Banner = () => {
  const bannerData = [
    {
      image: banner1,
      prev: 3,
      id: 1,
      next: 2,
    },
    {
      image: banner2,
      prev: 1,
      id: 2,
      next: 3,
    },
    {
      image: banner3,
      prev: 2,
      id: 3,
      next: 1,
    },
  ]
  return (
    <div className="carousel w-full py-10">
    {
      bannerData.map(slide => <BannerItem
      key={slide.id}
      slider={slide}
      ></BannerItem>)
      }
  </div>
  );
};

export default Banner;