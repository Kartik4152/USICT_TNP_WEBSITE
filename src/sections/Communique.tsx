/* eslint-disable import/no-unresolved */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation, Pagination, Mousewheel, Keyboard, Autoplay
} from 'swiper';
import SiteData from 'SiteData';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Communique = () => (
  <div className="flex flex-col items-center pt-2">
    <div className="text-[#003865] text-4xl font-black leading-loose  ">
      {SiteData.messageAlumni.heading}
    </div>
    <Swiper
      cssMode
      navigation
      loop
      pagination={false}
      mousewheel
      keyboard
      modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
      autoplay={{ delay: 3000 }}
      className="mySwiper min-h-[25rem] w-full flex items-center"
    >
      {SiteData.messageAlumni.data.map((person) => (
        <SwiperSlide>
          <div className="flex p-8 gap-8 border-y-2 border-dotted">
            <div className="self-center">
              <img src={person.image} alt="" className="max-h-[13rem]" />
            </div>
            <div className="flex flex-col space-y-4">
              <div className="font-bold leading-8 text-2xl text-[#003865]">
                {person.name}
              </div>
              <div className="max-w-[30rem]  text-[#003865]">
                {person.text}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

export default Communique;
