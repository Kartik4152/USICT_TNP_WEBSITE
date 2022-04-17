/* eslint-disable import/no-unresolved */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import {
  Navigation, Pagination, Mousewheel, Keyboard, Autoplay
} from 'swiper';
import headerIMG from '../assets/header-1.jpg';

const Header = () => (
  <div className="relative" id="header">
    <Swiper
      cssMode
      loop
      navigation
      keyboard
      modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
      // autoplay={{ delay: 3000 }}
      className="mySwiper h-[90vh] w-full mt-[80px] flex items-center ]"
    >
      <SwiperSlide>
        <div className="grid grid-cols-4 gap-10 absolute z-10 m-auto top-1/3 xl:right-40 xl:left-40 lg:right-16 lg:left-16 bottom-1/3 text-white">
          <div className="col-span-2  grid grid-cols-3 ">
            <i className="lg:text-6xl fa-solid fa-indian-rupee-sign text-yellow-400 md:text-4xl" />
            <h1 className="lg:text-4xl md:text-2xl col-span-2 ">
              HIGHEST PACKAGE:
              <br />
              {' '}
              RS 44.14 LPA
            </h1>
          </div>
          <div className="col-span-2  grid grid-cols-3  ">
            <i className="lg:text-6xl fa-solid fa-users-line text-yellow-400 md:text-4xl" />
            <h1 className="lg:text-4xl col-span-2 md:text-2xl">100+ RECRUITERS</h1>
          </div>
          <div className="col-span-2  grid grid-cols-3  ">
            <i className="lg:text-6xl fa-solid fa-arrow-up-wide-short text-yellow-400 md:text-4xl " />
            <h1 className="lg:text-4xl col-span-2  md:text-2xl "> 370+ OFFERS </h1>
          </div>
          <div className="col-span-2  grid grid-cols-3 ">
            <i className="lg:text-6xl fa-solid fa-circle-notch text-yellow-400 md:text-4xl" />
            <h1 className="lg:text-4xl col-span-2 md:text-2xl">
              91% STUDENTS
              {' '}
              <br />
              PLACED!
            </h1>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="grid grid-cols-4 gap-10 absolute z-10 m-auto top-1/3 right-64 left-64 bottom-1/3 text-white">
          <div className="col-span-2  grid grid-cols-3  ">
            <i className="text-6xl fa-solid  fa-dollar-sign text-yellow-400 text-center" />
            <h1 className="text-4xl col-span-2 ">
              Dream Offers:
              {/* <br /> */}
              {' '}
              65+
            </h1>
          </div>
          <div className="col-span-2  grid grid-cols-3  ">
            <i className="text-6xl fa-solid fa-laptop-code  text-yellow-400" />
            <h1 className="text-4xl col-span-2">110+ Internship Offers</h1>
          </div>
          <div className="col-span-2  grid grid-cols-3  ">
            <i className="text-6xl fa-solid fa-code text-yellow-400 " />
            <h1 className="text-4xl col-span-2  "> 7 GSOC Selections</h1>
          </div>
          <div className="col-span-2  grid grid-cols-3 ">
            <i className="text-6xl fa-solid  fa-percent text-yellow-400" />
            <h1 className="text-4xl col-span-2">
              Average Package:
              {' '}
              <br />
              12.50 LPA
            </h1>
          </div>
        </div>
      </SwiperSlide>
      <img
        src={headerIMG}
        alt="header-1"
        className="object-cover bg-center h-full w-full brightness-50 -z-50 absolute"
      />
    </Swiper>
  </div>
);

export default Header;
