import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import test from "../assets/test.jpg";
let persons = [
  {
    name: "Prof Praveen Chandra",
    img: test,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur blanditiis ipsam velit ipsa dolorem. Totam alias assumenda, deleniti quisquam laudantium voluptatum quos et porro esse sequi? Eaque, accusantium? Modi eum repellendus sunt minima Lorem ipsum dolor sit amet.",
  },
  {
    name: "Prof Praveen Chandra",
    img: test,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur blanditiis ipsam velit ipsa dolorem. Totam alias assumenda, deleniti quisquam laudantium voluptatum quos et porro esse sequi? Eaque, accusantium? Modi eum repellendus sunt minima Lorem ipsum dolor sit amet.",
  },
  {
    name: "Prof Praveen Chandra",
    img: test,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur blanditiis ipsam velit ipsa dolorem. Totam alias assumenda, deleniti quisquam laudantium voluptatum quos et porro esse sequi? Eaque, accusantium? Modi eum repellendus sunt minima Lorem ipsum dolor sit amet.",
  },
  {
    name: "Prof Praveen Chandra",
    img: test,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur blanditiis ipsam velit ipsa dolorem. Totam alias assumenda, deleniti quisquam laudantium voluptatum quos et porro esse sequi? Eaque, accusantium? Modi eum repellendus sunt minima Lorem ipsum dolor sit amet.",
  },
];
function Communique() {
  return (
    <div className="flex flex-col items-center pt-2">
      <div className="text-[#003865] text-4xl font-black leading-loose  ">
        Alumni Communique
      </div>
      <Swiper
        cssMode={true}
        navigation={true}
        loop={true}
        pagination={false}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        autoplay={{ delay: 3000 }}
        className="mySwiper min-h-[25rem] w-full flex items-center"
      >
        {persons.map((person) => {
          return (
            <SwiperSlide>
              <div className="flex p-8 gap-8 border-y-2 border-dotted">
                <div className="self-center">
                  <img src={person.img} alt="" className="max-h-[13rem]" />
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
          );
        })}
      </Swiper>
    </div>
  );
}

export default Communique;
