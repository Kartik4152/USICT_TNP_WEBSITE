import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";
export default function Header() {
  return (
    <div className="relative" id="header">
      <Swiper
        cssMode={true}
        loop={true}
        navigation={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        autoplay={{ delay: 3000 }}
        className="mySwiper h-[90vh] w-full mt-[80px] flex items-center ]"
      >
        <SwiperSlide>
          <div className="grid grid-cols-4 gap-10 absolute z-10 m-auto top-1/3 right-64 left-64 bottom-1/3 text-white">
            <div className="col-span-2  grid grid-cols-3  ">
              <i className="text-6xl fa-solid fa-indian-rupee-sign text-yellow-400"></i>
              <h1 className="text-4xl col-span-2 ">
                HIGHEST PACKAGE:
                <br /> RS 32 LPA
              </h1>
            </div>
            <div className="col-span-2  grid grid-cols-3  ">
              <i className="text-6xl fa-solid fa-users-line text-yellow-400"></i>
              <h1 className="text-4xl col-span-2">40+ RECRUITERS</h1>
            </div>
            <div className="col-span-2  grid grid-cols-3  ">
              <i className="text-6xl fa-solid fa-arrow-up-wide-short text-yellow-400 "></i>
              <h1 className="text-4xl col-span-2  "> 250+ OFFERS </h1>
            </div>
            <div className="col-span-2  grid grid-cols-3 ">
              <i className="text-6xl fa-solid fa-circle-notch text-yellow-400"></i>
              <h1 className="text-4xl col-span-2">
                94% STUDENTS <br />
                PLACED!
              </h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-4 gap-10 absolute z-10 m-auto top-1/3 right-64 left-64 bottom-1/3 text-white">
            <div className="col-span-2  grid grid-cols-3  ">
              <i className="text-6xl fa-solid fa-indian-rupee-sign text-yellow-400"></i>
              <h1 className="text-4xl col-span-2 ">
                HIGHEST PACKAGE:
                <br /> RS 32 LPA
              </h1>
            </div>
            <div className="col-span-2  grid grid-cols-3  ">
              <i className="text-6xl fa-solid fa-users-line text-yellow-400"></i>
              <h1 className="text-4xl col-span-2">40+ RECRUITERS</h1>
            </div>
            <div className="col-span-2  grid grid-cols-3  ">
              <i className="text-6xl fa-solid fa-arrow-up-wide-short text-yellow-400 "></i>
              <h1 className="text-4xl col-span-2  "> 250+ OFFERS </h1>
            </div>
            <div className="col-span-2  grid grid-cols-3 ">
              <i className="text-6xl fa-solid fa-circle-notch text-yellow-400"></i>
              <h1 className="text-4xl col-span-2">
                94% STUDENTS <br />
                PLACED!
              </h1>
            </div>
          </div>
        </SwiperSlide>
        <img
          src={require("../assets/header-1.jpg")}
          alt="header-1"
          className="object-fill h-full w-full brightness-50 -z-50 absolute"
        />
      </Swiper>
    </div>
  );
}
