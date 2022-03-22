import React from "react";
import Image_Rankings from "../assets/rankings_pic.png";

const Rankings = () => {
  return (
    <div className="flex flex-col bg-[#fff] w-full p-4 items-center gap-8">
      <h1 className="mb-4 text-4xl font-bold text-[#003865] leading-loose">
        Rankings
      </h1>
      <img
        src={Image_Rankings}
        alt="rankings"
        className="w-3/5 object-contain"
      />
    </div>
  );
};

export default Rankings;
